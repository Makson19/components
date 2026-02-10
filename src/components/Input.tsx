import React from 'react';
import './styles/Input.styles.css';

interface InputProps {
  label?: string;
  labelPosition?: 'top' | 'left';
  iconProps?: React.ComponentProps<'svg'>;
  startIcon?: React.ElementType;
  endIcon?: React.ElementType;
  variant?: 'outlined' | 'standard';
  inputProps?: React.ComponentProps<'input'>;
  meta?: { touched?: boolean, error?: string };
}

const Input = (props: InputProps) => {
  const {
    label,
    labelPosition = 'top',
    variant='outlined',
    startIcon: StartIcon,
    endIcon: EndIcon,
    iconProps,
    inputProps,
    meta
  } = props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const hasError = Boolean(meta?.touched && meta?.error);

  const handleClickIcon = () => {
    inputRef.current?.focus();
  }

  return (
    <div>
      <div
        className={
          'ft-input-container' +
          ` label-pos-${labelPosition}` +
          ` var-${variant}` +
          ` ${hasError ? 'ft-input-error-state' : ''}` +
          ` ${inputProps?.disabled ? 'ft-input-disabled' : ''}`
        }
      >
        {label && (
          <label htmlFor={inputProps?.id} className='ft-input-label'>{label}</label>
        )}
        <div className='ft-input-wrapper'>
          {StartIcon && (
            <div className='ft-input-icon' onClick={handleClickIcon}>
              <StartIcon {...iconProps} />
            </div>
          )}
          <input
            id={inputProps?.id}
            className='ft-input-element'
            ref={inputRef}
            {...inputProps}
          />
          {EndIcon && (
            <div className='ft-input-icon' onClick={handleClickIcon}>
              <EndIcon {...iconProps} />
            </div>
          )}
        </div>
      </div>
      {meta?.touched && meta?.error && (
        <span className='ft-input-error'>{meta?.error}</span>
      )}
    </div>
  );
};

export default Input;
