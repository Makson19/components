import React from 'react';
import './styles/Loading.styles.css';

interface ILoadingProps {
  color?: string;
  size?: number;
  thickness?: number;
  variant?: 'circular' | 'linear';
}

const Loading = (props: ILoadingProps) => {
  const {
    color = '#0B3EF9',
    variant = 'circular',
    size = 48,
    thickness = 3,
  } = props;

  return (
    <span
      className={
        'ft-loader' +
        ` var-${variant}`
      }
      style={{
        ...(variant === 'circular' ? {
          height: `${size}px`,
          width: `${size}px`,
          borderColor: color,
          borderBottomColor: 'transparent',
          borderWidth: thickness
        } : {}),
        ...(variant === 'linear' ? {
          height: thickness,
          '.var-linear::after': {
            background: color,
          }
        } : {})
      }}
    />
  );
};

export default Loading;
