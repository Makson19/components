import React from 'react';
import { Popover } from '@mui/material';
import { styled } from '@mui/material/styles';

const PopoverContainer = styled('div')(() => ({
  width: 'fit-content',
  height: '16px',

  '& .popover-anchor-icon': {
    cursor: 'pointer',
  }
}))

const InfoIcon = (props: React.ComponentProps<'svg'>) => {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.492 6.91A.5.5 0 007.5 7v4.502l.008.09a.5.5 0 00.992-.09V7l-.008-.09zM8.8 4.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zM16 8A8 8 0 100 8a8 8 0 0016 0zM1 8a7 7 0 1114 0A7 7 0 011 8z"
        fill="#9F9F9F"
      />
    </svg>
  )
}

interface IHelperTextProps {
  helperText: string;
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
  transformOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  }
}

const HelperText = (props: IHelperTextProps) => {
  const {
    helperText,
    anchorOrigin={ vertical: 'bottom', horizontal: 'left' },
    transformOrigin={ vertical: 'top', horizontal: 'left' }
  } = props;
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleOpenPopover = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }

  const handleClosePopover = () => {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);

  return (
    <PopoverContainer>
      <div
        aria-owns={open ? 'popover-open' : undefined}
        aria-haspopup="true"
        onMouseEnter={handleOpenPopover}
        onMouseLeave={handleClosePopover}
        className='popover-anchor-icon'
      >
        <InfoIcon />
      </div>
      <Popover
        id='popover-open'
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        onClose={handleClosePopover}
        disableRestoreFocus
        sx={{ pointerEvents: 'none' }}
      >
        <div
          style={{
            padding: '8px',
            fontSize: '14px',
            lineHeight: '150%',
          }}
        >
          {helperText}
        </div>
      </Popover>
    </PopoverContainer>
  )
};

export default HelperText;
