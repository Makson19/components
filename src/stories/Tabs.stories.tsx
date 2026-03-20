import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tabs, Tab, TabPanel } from '../components/Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  subcomponents: { Tab, TabPanel },
  decorators: [(story) => <div style={{ margin: '3rem' }}>{story()}</div>],
  tags: ['autodocs', 'dev'],
  argTypes: {
    value: {
      description: 'Indicates the index of the currently active tab. The index is zero-based, meaning that the first tab corresponds to an index of 0.',
      control: false
    },
    onChange: {
      description: 'A callback function that is called when the active tab changes. It receives two arguments: the event object and the new value (index) of the active tab.',
      control: false
    },
    children: {
      description: 'One or more <code>Tab</code> components that represent the individual tabs, and <code>TabPanel</code> components that represent the content associated with each tab. Each <code>Tab</code> should have a corresponding <code>TabPanel</code> with the same index to ensure proper functionality.',
      control: false
    }
  }
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  render: () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const contents = ['Content 1', 'Content 2', 'Content 3'];
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
      <>
        <Tabs value={value} onChange={handleChange}>
          {items.map((label, index) => (
            <Tab
              key={index}
              label={label}
              value={index}
              index={index}
            />
          ))}
        </Tabs>
        {contents.map((content, index) => (
          <TabPanel key={index} value={value} index={index}>
            <div style={{ margin: '1rem' }}>
              {content}
            </div>
          </TabPanel>
        ))}
      </>
    )
  }
};

