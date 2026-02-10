import React from 'react';
import './styles/Select.styles.css';

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

interface ISelectProps {
  label?: string;
  labelPosition?: 'top' | 'left';
  variant?: 'outlined' | 'standard';
  placeholder?: string;
  options: { label: string, value: string }[];
  selectProps?: React.ComponentProps<'select'>;
  isClearable?: boolean;
  onClearField?: () => void;
  meta?: { touched?: boolean, error?: string };
}

const Select = (props: ISelectProps) => {
  const {
    label,
    labelPosition = 'top',
    variant = 'outlined',
    placeholder='Selecione...',
    options,
    selectProps,
    isClearable,
    onClearField,
    meta
  } = props;
  const hasError = Boolean(meta?.touched && meta?.error);

  return (
    <div>
      <div
        className={
          'ft-select-container' +
          ` label-pos-${labelPosition}` +
          ` var-${variant}` +
          ` ${hasError ? 'ft-select-error-state' : ''}` +
          ` ${selectProps?.disabled ? 'ft-select-disabled' : ''}`
        }
      >
        {label && (
          <label htmlFor={selectProps?.id} className='ft-select-label'>{label}</label>
        )}
        <div className='ft-select-wrapper'>
          <select
            className='ft-select-element'
            {...selectProps}
          >
            <>
              <option value='' disabled selected>{placeholder}</option>
              {options?.map((option) => {
                return (
                  <option value={option.value}>{option.label}</option>
                )
              })}
            </>
          </select>
          {isClearable && selectProps?.value && (
            <button type='button' className='ft-select-btn' onClick={onClearField}>
              <div className='ft-select-btn-container'>
                <CloseIcon className='ft-select-btn-icon' />
              </div>
            </button>
          )}
        </div>
      </div>
      {meta?.touched && meta?.error && (
        <span className='ft-select-error'>{meta?.error}</span>
      )}
    </div>
  );
};

export default Select;
