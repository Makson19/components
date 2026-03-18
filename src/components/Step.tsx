import React from 'react';
import {
  Box,
  Step as StepWrapper,
  Stepper,
  StepLabel
} from '@mui/material';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import type { StepIconProps } from '@mui/material/StepIcon';
import type { StepProps } from '@mui/material/Step';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonIcon from '@mui/icons-material/Person';

const StepConnectorStyled = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    left: 'calc(-50% + 32px)',
    right: 'calc(50% + 32px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#C0C0C0',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: 2,
  }
}))

const StepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(() => ({
  color: '#C0C0C0',
  borderColor: '#C0C0C0',
  height: '32px',

  '& .stepIcon-completedIcon': {
    color: '#0B3EF9',
    fontSize: '32px'
  },

  '& .stepIcon-circle': {
    width: '32px',
    height: '32px',
    border: '2px solid #C0C0C0',
    borderRadius: '50%',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13px',
    fontWeight: 700,

    '& .stepIcon-dot': {
      backgroundColor: '#C0C0C0',
      borderRadius: '11px',
      display: 'inline-block',
      height: '11px',
      width: '11px',
    },

    '& .stepIcon-icon': {
      fontSize: '18px'
    }
  },
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        color: '#0B3EF9',
        '& .stepIcon-circle': {
          borderColor: '#0B3EF9',

          '& .stepIcon-dot': {
            backgroundColor: '#0B3EF9',
          }
        }
      }
    }
  ]
}))

type StepVariant = 'number' | 'dot' | 'icon';

interface IconProps {
  variant?: StepVariant;
  icon: React.ReactNode;
}

const Icon = (props: IconProps) => {
  const { variant, icon } = props;

  if (variant === 'dot') {
    return (
      <div className='stepIcon-circle'>
        <span className='stepIcon-dot' />
      </div>
    )
  } else if (variant === 'icon') {
    return (
      <div className='stepIcon-circle'>
        <PersonIcon className='stepIcon-icon' />
      </div>
    )
  } else {
    return (
      <div className='stepIcon-circle'>
        {icon}
      </div>
    )
  }
}


interface IStepIconComponentProps extends StepIconProps {
  variant?: StepVariant;
}

const StepIconComponent = (props: IStepIconComponentProps) => {
  const { active, completed, icon, variant } = props;
  const iconNumber = Number(icon);
  const newIcon =
    !isNaN(iconNumber) && iconNumber < 10
      ? `0${iconNumber}`
      : icon;

  return (
    <StepIconRoot ownerState={{ active }}>
      {completed
        ? (
          <CheckCircleIcon className='stepIcon-completedIcon' />
        ) : (
          <Icon variant={variant} icon={newIcon} />
        )}
    </StepIconRoot>
  )
}


interface IStepsProps {
  activeStep: number;
  children: React.ReactNode;
}

const Steps = (props: IStepsProps) => {
  const { activeStep, children } = props;

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        connector={<StepConnectorStyled />}
      >
        {children}
      </Stepper>
    </Box>
  )
}



interface IStepProps {
  label?: string;
  variant?: StepVariant;
}

const Step = (props: IStepProps & StepProps) => {
  const { label, variant = 'number' } = props;

  return (
    <StepWrapper {...props}>
      <StepLabel
        slots={{
          stepIcon: (params) => <StepIconComponent {...params} variant={variant} />
        }}
        sx={{
          '& .MuiStepLabel-label': {
            color: '#818181',
            fontSize: '13px',
            fontWeight: 500,
            marginTop: label ? '10px !important' : 0,
            '&.Mui-active, &.Mui-completed': {
              color: '#0B3EF9',
              fontWeight: 700,
            }
          }
        }}
      >
        {label}
      </StepLabel>
    </StepWrapper>
  )
}

export { Steps, Step };
