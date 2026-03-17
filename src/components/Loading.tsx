import { styled, keyframes } from '@mui/material/styles';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const animloader = keyframes`
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
`;

const LoadingContainer = styled('span')<ILoadingProps>(({ variant, size, color, thickness }) => ({
  display: 'inline-block',

  ...(variant === 'circular' && {
    width: `${size}px`,
    height: `${size}px`,
    border: `${thickness}px solid ${color}`,
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    animation: `${rotation} 1s linear infinite`,
  }),

  ...(variant === 'linear' && {
    width: '100%',
    height: `${thickness}px`,
    position: 'relative',
    background: '#D0D1D4',
    overflow: 'hidden',

    '&::after': {
      content: '""',
      width: '20%',
      height: `${thickness}px`,
      background: `${color}`,
      position: 'absolute',
      top: 0,
      left: 0,
      animation: `${animloader} 2s linear infinite`
    }
  }),
}))

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
    <LoadingContainer
      variant={variant}
      size={size}
      color={color}
      thickness={thickness}
    />
  );
};

export default Loading;
