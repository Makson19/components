import React from 'react';
import {
  Tabs as TabsComponent,
  Tab as TabComponent
} from '@mui/material';
import type { TabsProps } from '@mui/material/Tabs';
import type { TabProps } from '@mui/material/Tab';
import { styled } from '@mui/material/styles';


const TabsContainer = styled(TabsComponent)(() => ({
  '& .MuiTab-root': {
    padding: '8px 36px',
    color: '#BEBEBE',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '120%',
    textTransform: 'capitalize',
    minHeight: 0,
    borderBottom: '1px solid rgba(224, 224, 224, 0.40)',
    transition: 'border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    
    '&.Mui-selected': {
      color: '#434343',
      borderColor: '#0B3EF9',
    }
  },

  '& .MuiTabs-indicator': {
    display: 'none',
  }
}))

const Tabs = (props: TabsProps) => {
  const { children, value, onChange, ...rest } = props;
  return (
    <TabsContainer
      value={value}
      onChange={onChange}
      aria-label='tabs'
      {...rest}
    >
      {children}
    </TabsContainer>
  )
} 



interface ITabProps extends TabProps {
  index: number;
}

const Tab = (props: ITabProps) => {
  const { label, value, index, ...rest } = props;

  return (
    <TabComponent
      label={label}
      value={value}
      id={`tab-${index}`}
      aria-controls={`tabpanel-${index}`}
      {...rest}
    />
  )
}



interface ITabPanelProps {
  children: React.ReactNode;
  value: number;
  index: number;
}

const TabPanel = (props: ITabPanelProps) => {
  const { children, value, index } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
    >
      {value === index && <>{children}</>}
    </div>
  )
}


export { Tabs, Tab, TabPanel };
