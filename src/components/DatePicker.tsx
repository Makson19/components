import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR as ptbr } from '@mui/x-date-pickers/locales'
import { ptBR } from 'date-fns/locale';
import { DateTimePicker, type DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { styled } from '@mui/material/styles';

const DateTimePickerContainer = styled('div')(() => ({
  '& .ft-datepicker-container': {
    display: 'flex',
    gap: '8px',

    '&.label-pos-top': {
      flexDirection: 'column',
    },

    '&.label-pos-left': {
      alignItems: 'center',
      flexDirection: 'row',
    },

    '& .ft-datepicker-label': {
      color: '#484848',
      fontSize: '12px',
      fontWeight: 600,
      lineHeight: '120%'
    },

    '& .ft-datepicker': {
      flex: 1,

      '& .ft-datepicker-wrapper': {
        position: 'relative',

        '& .datepicker': {
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
          },
        },

        '& .ft-datepicker-btn': {
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

      '& .ft-datepicker-error': {
        color: '#D8201D',
        fontSize: '13px',
        fontWeight: 500,
        marginTop: '4px',
        paddingLeft: '8px'
      }
    },

    '&.ft-datepicker-error-state > .ft-datepicker > .ft-datepicker-wrapper > .datepicker fieldset': {
      borderColor: '#D8201D'
    },
  },

  // STANDARD VARIANT
  '& .ft-datepicker-container.variant-standard': {
    '& .ft-datepicker': {
      '& .ft-datepicker-wrapper': {
        '& .datepicker': {
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

          '& .ft-datepicker-error': {
            color: '#D8201D',
            fontSize: '13px',
            fontWeight: 500,
            marginTop: '4px',
            paddingLeft: '8px'
          },
        }
      },
    },

    '&.ft-datepicker-error-state > .ft-datepicker > .ft-datepicker-wrapper > .datepicker fieldset': {
      borderColor: '#D8201D'
    },
  },

  // DISABLED STATE
  '& .ft-datepicker-container.ft-datepicker-disabled': {
    '& .ft-datepicker': {
      '& .ft-datepicker-wrapper': {
        '& .datepicker': {
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
}))


const CalendarIcon = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      {...props}
    >
      <path
        d="M15.751 1.04H12.95V.516A.519.519 0 0012.43 0a.519.519 0 00-.517.517v.522H4.742V.517A.519.519 0 004.225 0a.519.519 0 00-.517.517v.522H.905A.895.895 0 000 1.924v12.395c0 1.293 1.107 2.348 2.472 2.348H14.19c1.36 0 2.472-1.055 2.472-2.348V1.924c0-.486-.409-.885-.91-.885zM3.708 2.073v.522c0 .284.232.517.517.517a.519.519 0 00.517-.517v-.522h7.172v.522a.519.519 0 001.034 0v-.522h2.674v2.25H1.034v-2.25h2.674zM14.19 15.632H2.472c-.791 0-1.438-.59-1.438-1.313V5.357h14.593v8.962c0 .724-.646 1.313-1.437 1.313z"
        fill="currentColor"
      />
    </svg>
  )
}

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


interface IDatePickerProps extends DateTimePickerProps {
  id?: string;
  name?: string;
  label?: string;
  labelPosition?: 'top' | 'left';
  variant?: 'outlined' | 'standard';
  placeholder?: string;
  meta?: { touched?: boolean, error?: string };
  onBlur?: () => void;
  isClearable?: boolean;
  onClearField?: () => void;
}

const DatePicker = (props: IDatePickerProps) => {
  const {
    id,
    name,
    label,
    labelPosition = 'top',
    placeholder,
    meta,
    isClearable,
    onClearField,
    variant = 'outlined',
    disabled,
    ...rest
  } = props;

  const hasError = Boolean(meta?.touched && meta?.error);

  return (
    <LocalizationProvider
      dateAdapter={AdapterDateFns}
      adapterLocale={ptBR}
      localeText={ptbr.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <DateTimePickerContainer>
        <div
          className={
            'ft-datepicker-container' +
            ` label-pos-${labelPosition}` +
            ` variant-${variant}` +
            ` ${hasError ? ' ft-datepicker-error-state' : ''}` +
            ` ${disabled ? ' ft-datepicker-disabled' : ''}`
          }
        >
          {label && (
            <label
              htmlFor={id}
              className='ft-datepicker-label'
            >
              {label}
            </label>
          )}
          <div className='ft-datepicker'>
            <div className='ft-datepicker-wrapper'>
              <DateTimePicker
                {...rest}
                className='datepicker'
                name={name}
                disabled={disabled}
                viewRenderers={{
                  hours: renderTimeViewClock,
                  minutes: renderTimeViewClock
                }}
                slots={{
                  openPickerIcon: CalendarIcon
                }}
                slotProps={{
                  field: {
                    id: id,
                  },
                  textField: {
                    placeholder: placeholder,
                    spellCheck: false,
                    onBlur: !disabled ? rest?.onBlur : () => null
                  },
                  openPickerIcon: {
                    style: { zIndex: 2 }
                  }
                }}
              />
              {isClearable && rest?.value && (
                <button type='button' onClick={onClearField} className='ft-datepicker-btn'>
                  <CloseIcon className='ft-datepicker-btn-icon' />
                </button>
              )}
            </div>

            {hasError && (
              <span className='ft-datepicker-error'>{meta?.error}</span>
            )}
          </div>
        </div>
      </DateTimePickerContainer>
    </LocalizationProvider>
  )
}

export default DatePicker;
