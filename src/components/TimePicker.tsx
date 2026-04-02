import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR as ptbr } from '@mui/x-date-pickers/locales'
import { ptBR } from 'date-fns/locale';
import {
  TimePicker as TimePickerComponent,
  type TimePickerProps
} from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { styled } from '@mui/material/styles';

const TimePickerContainer = styled('div')(() => ({
  '& .ft-timepicker-container': {
    display: 'flex',
    gap: '8px',

    '&.label-pos-top': {
      flexDirection: 'column',
    },

    '&.label-pos-left': {
      alignItems: 'center',
      flexDirection: 'row',
    },

    '& .ft-timepicker-label': {
      color: '#484848',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '120%'
    },

    '& .ft-timepicker': {
      flex: 1,

      '& .ft-timepicker-wrapper': {
        position: 'relative',

        '& .timepicker': {
          width: '100%',

          '& > .MuiPickersInputBase-root': {
            height: '40px',

            '& .MuiPickersSectionList-root': {
              textTransform: 'lowercase',
              zIndex: 2,

              '& *': {
                color: '#484848 !important',
              }
            },

            '& fieldset': {
              border: '1px solid #D0D1D4',
              borderRadius: '8px',
            },

            '&:hover fieldset': {
              borderColor: '#959595',
            },

            '&:focus-within > fieldset': {
              borderColor: '#959595',
            }
          }
        },

        '& .ft-timepicker-btn': {
          position: 'absolute',
          right: '36px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 2,
          border: 'none',
          borderRadius: '50%',
          padding: '6px',
          outline: 'none',
          background: 'transparent',
          cursor: 'pointer',

          '& > .ft-datepicker-btn-icon': {
            height: '12px',
            width: '12px',
          },

          '&:hover': {
            background: '#EAEAEA'
          },

          '&:active > .ft-datepicker-btn-icon': {
            color: '#FFFFFF'
          }
        }
      },

      '& .ft-timepicker-error': {
        color: '#D8201D',
        fontSize: '13px',
        fontWeight: 500,
        marginTop: '4px',
        paddingLeft: '8px'
      }
    },

    '&.ft-timepicker-error-state > .ft-timepicker > .ft-timepicker-wrapper > .timepicker fieldset': {
      borderColor: '#D8201D'
    },
  },

  // STANDARD VARIANT
  '& .ft-timepicker-container.variant-standard': {
    '& .ft-timepicker': {
      '& .ft-timepicker-wrapper': {
        '& .timepicker': {
          '& .MuiPickersInputBase-root': {
            '& fieldset': {
              border: 'none',
              borderBottom: '1px solid #D0D1D4',
              borderRadius: 0,
            },

            '&:hover fieldset': {
              borderColor: '#959595',
            },

            '&:focus-within > fieldset': {
              borderColor: '#959595',
            }
          },

          '& .ft-timepicker-error': {
            color: '#D8201D',
            fontSize: '13px',
            fontWeight: 500,
            marginTop: '4px',
            paddingLeft: '8px'
          },
        }
      },
    },

    '&.ft-timepicker-error-state > .ft-timepicker > .ft-timepicker-wrapper > .timepicker fieldset': {
      borderColor: '#D8201D'
    },
  },

  // DISABLED STATE
  '& .ft-timepicker-container.ft-timepicker-disabled': {
    '& .ft-timepicker': {
      '& .ft-timepicker-wrapper': {
        '& .timepicker': {
          '& .MuiPickersInputBase-root': {
            '& > fieldset': {
              background: '#EAECF0',
              borderColor: '#D0D1D4 !important'
            },

            '&:hover > fieldset': {
              borderColor: '#D0D1D4 !important'
            }
          }
        }
      }
    }
  }
}));

function CloseIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      {...props}
    >
      <path
        d="M6.541 6l5.34-5.342a.383.383 0 00-.542-.542L5.996 5.463.657.113a.387.387 0 00-.545 0 .387.387 0 000 .545l5.343 5.346-5.343 5.343A.383.383 0 00.385 12c.1 0 .196-.038.272-.111L6 6.542l5.343 5.347a.377.377 0 00.272.111.383.383 0 00.273-.653L6.545 6h-.004z"
        fill="currentColor"
      />
    </svg>
  )
}


interface ITimePickerProps extends TimePickerProps {
  label?: string;
  labelPosition?: 'top' | 'left';
  id?: string;
  name?: string;
  variant?: 'outlined' | 'standard';
  meta?: { touched?: boolean, error?: string };
  disabled?: boolean;
  onBlur?: () => void;
  isClearable?: boolean;
  onClearField?: () => void;
}

const TimePicker = (props: ITimePickerProps) => {
  const {
    label,
    labelPosition = 'top',
    variant = 'outlined',
    meta,
    id,
    name,
    disabled,
    onBlur,
    isClearable,
    onClearField,
    ...rest
  } = props;
  const hasError = Boolean(meta?.touched && meta?.error);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={ptBR}
      localeText={ptbr.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <TimePickerContainer>
        <div
          className={
            'ft-timepicker-container' +
            ` label-pos-${labelPosition}` +
            ` variant-${variant}` +
            ` ${hasError ? ' ft-timepicker-error-state' : ''}` +
            ` ${disabled ? ' ft-datepicker-disabled' : ''}`
          }
        >
          {label && (
            <label
              htmlFor={id}
              className='ft-timepicker-label'
            >
              {label}
            </label>
          )}
          <div className='ft-timepicker'>
            <div className='ft-timepicker-wrapper'>
              <TimePickerComponent
                {...rest}
                className='timepicker'
                name={name}
                disabled={disabled}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock
                }}
                slotProps={{
                  field: {
                    id: id
                  },
                  textField: {
                    spellCheck: false,
                    onBlur: !disabled ? onBlur : () => null
                  },
                  openPickerIcon: {
                    style: { zIndex: 2 }
                  }
                }}
              />
              {isClearable && rest?.value && (
                <button type='button' onClick={onClearField} className='ft-timepicker-btn'>
                  <CloseIcon className='ft-timepicker-btn-icon' />
                </button>
              )}
            </div>
            {hasError && (
              <span className='ft-timepicker-error'>{meta?.error}</span>
            )}
          </div>
        </div>
      </TimePickerContainer>
    </LocalizationProvider>
  )
}

export default TimePicker;
