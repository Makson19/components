import type { Meta, StoryObj } from '@storybook/react-vite';
import { Steps, Step } from '../components/Step';

const steps = ['Step 1', 'Step 2', 'Step 3'];

const meta = {
  title: 'Components/Steps',
  component: Steps,
  subcomponents: { Step },
  decorators: [(story) => <div style={{ margin: '3rem' }}>{story()}</div>],
  tags: ['autodocs', 'dev'],
  argTypes: {
    activeStep: {
      description: 'Indicates the index of the currently active step. The index is zero-based, meaning that the first step corresponds to an index of 0.',
    },
    children: {
      description: 'One or more <code>Step</code> components that represent the individual steps within the stepper. Each <code>Step</code> can have its own label and variant to customize its appearance.',
      control: false
    }
  }
} satisfies Meta<typeof Steps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExampleWithNumberVariant: Story = {
  args: {
    activeStep: 1,
    children: steps.map((label, index) => (
      <Step key={index} label={label} variant='number' />
    ))
  }
};

export const ExampleWithDotVariant: Story = {
  args: {
    activeStep: 1,
    children: steps.map((label, index) => (
      <Step key={index} label={label} variant='dot' />
    ))
  }
};

export const ExampleWithIconVariant: Story = {
  args: {
    activeStep: 1,
    children: steps.map((label, index) => (
      <Step key={index} label={label} variant='icon' />
    ))
  }
};
