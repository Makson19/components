import React from 'react';
import './styles/Button.styles.css'

type VariantStyle = 'primary' | 'secondary' | 'tertiary';
type Size = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface IButtonProps extends React.ComponentProps<'button'> {
  label: string;
  variant?: VariantStyle;
  size?: Size;
  startIcon?: React.ElementType;
  endIcon?: React.ElementType;
  iconProps?: React.ComponentProps<'svg'>;
}

const Button = (props: IButtonProps) => {
  const {
    label,
    variant='primary',
    size='xl',
    startIcon: StartIcon,
    endIcon: EndIcon,
    iconProps,
    disabled,
    ...rest
  } = props;
  
  return (
    <button
      className={
        'ft-btn' +
        ` ft-btn-${size}` +
        ` ft-btn-${variant}`
      }
      disabled={disabled}
      {...rest}
    >
      {StartIcon && (
        <div className='ft-btn-icon'>
          <StartIcon {...iconProps} />
        </div>
      )}
      <span className='ft-btn-label'>{label}</span>
      {EndIcon && (
        <div className='ft-btn-icon'>
          <EndIcon {...iconProps} />
        </div>
      )}
    </button>
  )
}

export default Button;
