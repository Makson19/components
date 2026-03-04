import React from 'react';
import { debounce } from 'lodash';
import { Autocomplete as AutoCompleteComponent, IconButton, TextField } from '@mui/material';
import './styles/AutoComplete.styles.css';

interface IAutoCompleteProps {
  label?: string;
  labelPosition?: 'top' | 'left';
  options: { value: number | string, label: string }[];
  freeSolo?: boolean;
  placeholder?: string;
  inputProps?: {
    id: string,
    value: string,
    onChange: (e: string) => void,
    maxLength?: number
  };
  autoCompleteProps?: {
    value: any,
    onChange: (_: unknown, value: any) => void,
    onBlur?: (e?: React.FocusEvent<HTMLInputElement>) => void,
    onFocus?: () => void,
    loading?: boolean
  };
  meta?: { touched?: boolean, error?: string };
  fetchOptions?: (param: string) => Promise<void>;
  inputFormatFunction?: (value: string) => string;
  disabled?: boolean;
  onlyNumbers?: boolean;
  disableClearButton?: boolean
}

const AutoComplete = (props: IAutoCompleteProps) => {
  const {
    label,
    labelPosition = 'top',
    options,
    freeSolo,
    inputProps,
    meta,
    placeholder,
    autoCompleteProps,
    fetchOptions,
    inputFormatFunction,
    disabled,
    onlyNumbers,
    disableClearButton
  } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const hasError = Boolean(meta?.touched && meta?.error);

  const handleSearch = React.useCallback(debounce((value: string) => {
    let parsedValue = value;
    if (onlyNumbers) {
      parsedValue = parsedValue?.replace(/[^0-9]/g, '');
    }
    fetchOptions?.(parsedValue);
  }, 500), [])

  return (
    <div>
      <div
        className={
          'ft-autocomplete-container' +
          ` label-pos-${labelPosition}` +
          ` ${hasError ? 'ft-input-error-state' : ''}` +
          ` ${disabled ? 'ft-input-disabled' : ''}`
        }
      >
        {label && (
          <label
            htmlFor={inputProps?.id}
            className='ft-autocomplete-label'
          >
            {label}
          </label>
        )}
        <div className='ft-input-wrapper'>
          <AutoCompleteComponent
            {...autoCompleteProps}
            freeSolo={freeSolo}
            options={options}
            disableClearable
            selectOnFocus
            disabled={disabled}
            clearText='Limpar campo'
            loadingText='Carregando...'
            noOptionsText='Sem opções'
            slotProps={{
              listbox: {
                sx: {
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  boxShadow: ' 0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.08)',
                },
              },
              popper: {
                sx: {
                  '& .MuiAutocomplete-loading': {
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxShadow: ' 0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.08)',
                    color: '#ccc'
                  }
                }
              }
            }}
            renderInput={(params: any) => {
              return (
                <div className='ft-input-container'>
                  <TextField
                    {...params}
                    inputRef={inputRef}
                    placeholder={placeholder}
                    slotProps={{
                      htmlInput: {
                        ...params?.inputProps,
                        id: inputProps?.id,
                        maxLength: inputProps?.maxLength,
                      }
                    }}
                  />
                  {!disableClearButton && inputProps?.value && (
                    <IconButton
                      className='ft-btn-clear'
                      onClick={() => {
                        inputProps?.onChange?.('');
                        fetchOptions?.('');
                        autoCompleteProps?.onChange?.(null, null);
                      }}
                    >
                      ✕
                    </IconButton>
                  )}
                </div>
              )
            }}
            onPaste={(e) => {
              e?.preventDefault();
              let text = e?.clipboardData?.getData('text/plain');
              if (onlyNumbers) {
                text = text?.replace(/[^0-9]/g, '');
              }
              if (fetchOptions) {
                handleSearch(text);
              }
              inputProps?.onChange?.(text as any);
            }}
            onInputChange={(_, value, reason) => {
              let parsedValue = value;
              if (onlyNumbers) {
                parsedValue = parsedValue?.replace(/[^0-9]/g, '');
              }
              if (fetchOptions && reason === 'input') {
                handleSearch(parsedValue);
              }
              inputProps?.onChange?.(parsedValue as any);
            }}
            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
              autoCompleteProps?.onBlur?.(e);
              if (inputFormatFunction) {
                const parsedValue = inputFormatFunction(inputProps?.value as string);
                inputProps?.onChange?.(parsedValue as any);
              }
            }}
            onFocus={() => {
              autoCompleteProps?.onFocus?.();
              setTimeout(() => {
                inputRef?.current?.select();
              }, 0);
              if (onlyNumbers) {
                const parsedValue = (inputProps?.value as string)?.replace(/[^0-9]/g, '');
                inputProps?.onChange?.(parsedValue as any);
              }
            }}
            inputValue={inputProps?.value}
            value={autoCompleteProps?.value}
          />
        </div>
      </div>
      {meta?.touched && meta?.error && (
        <span className='ft-input-error'>{meta?.error}</span>
      )}
    </div>
  )
}

export default AutoComplete;
