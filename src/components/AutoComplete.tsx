import React from 'react';
import { Autocomplete as AutoCompleteComponent, TextField } from '@mui/material';
import './styles/AutoComplete.styles.css';

type IValue = { [key: string]: any } | any;

interface IAutoCompleteProps {
  label?: string;
  labelPosition?: 'top' | 'left';
  options: any[];
  freeSolo?: boolean;
  placeholder?: string;
  inputProps?: React.ComponentProps<'input'>;
  autoCompleteProps?: any;
  meta?: { touched?: boolean, error?: string };
  fetchOptions?: (param: any) => Promise<void>;
}

const AutoComplete = (props: IAutoCompleteProps) => {
  const { label, labelPosition = 'top', options, freeSolo, inputProps, meta, placeholder, autoCompleteProps, fetchOptions } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  // const [autoCompleteKey, setAutoCompleteKey] = React.useState(new Date().toISOString());
  const [inputValue, setInputValue] = React.useState('');

  // React.useEffect(() => {
  //   if (inputProps?.value === '') {
  //     setAutoCompleteKey(new Date().toISOString());
  //   }
  // }, [inputProps?.value])

  React.useEffect(() => {
    if (!fetchOptions) return;

    // if (inputValue === '') {
    //   setAutoCompleteKey(new Date().toISOString());
    // }

    const handler = setTimeout(() => {
      if (inputValue && inputValue.length > 0) {
        fetchOptions(inputValue);
      }
    }, 500); // delay de 500ms

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  return (
    <div>
      <div
        className={
          'ft-autocomplete-container' +
          ` label-pos-${labelPosition}`
        }
      >
        {label && (
          <label htmlFor={inputProps?.id} className='ft-autocomplete-label'>{label}</label>
        )}
        <div className='ft-input-wrapper'>
          <AutoCompleteComponent
            {...autoCompleteProps}
            // key={autoCompleteKey}
            freeSolo={freeSolo}
            options={options}
            // disableClearable
            selectOnFocus
            clearText='Limpar campo'
            loadingText='Carregando...'
            noOptionsText='Sem opções'
            getOptionLabel={(option: IValue) => option?.label}
            // filterOptions={(x) => x}
            renderInput={(params: any) => {
              return (
                <TextField
                  {...params}
                  // variant='standard'
                  ref={inputRef}
                  placeholder={placeholder}
                  slotProps={{
                    htmlInput: {
                      ...params?.inputProps,
                      id: inputProps?.id,
                    }
                  }}
                />
              )
            }}
            onInputChange={(_, value, reason) => {
              console.log('VALUEONINPUT', value)
              console.log('reason', reason)
              // if (typeof inputProps?.value === 'string' && inputProps?.value?.length > 0) {
              //   fetchOptions?.(value);
              // }
              setInputValue(value);
              inputProps?.onChange?.(value as any);
            }}
            inputValue={inputValue}
          />
        </div>
      </div>
      {meta?.touched && meta?.error && (
        <span className=''>{meta?.error}</span>
      )}
    </div>
  );
};

export default AutoComplete;
