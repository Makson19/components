import type { Meta, StoryObj } from '@storybook/react-vite';
import Loading from '../components/Loading';

const meta = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs', 'dev'],
  argTypes: {
    color: {
      description: 'Defines the color of the loading indicator.',
      control: 'color'
    },
    size: {
      description: 'Defines the size of the loading indicator (applicable for circular variant). <code>1 = 1px</code>',
      control: {
        type: 'number',
        min: 0
      }
    },
    thickness: {
      description: 'Defines the thickness of the loading indicator. <code>1 = 1px</code>',
      control: {
        type: 'number',
        min: 0
      }
    },
    variant: {
      description: 'Defines the visual style of the loading indicator: a spinning circle (<code>circular</code>) or a horizontal bar (<code>linear</code>).'
    }
  }
} satisfies Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {};
