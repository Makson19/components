import type { Meta, StoryObj } from '@storybook/react-vite'; 
import { fn } from 'storybook/test';
import Button from '../components/Button';
import ArrowLeftIcon from '../icons/ArrowLeftIcon';
import ArrowRightIcon from '../icons/ArrowRightIcon';
import ArrowUpIcon from '../icons/ArrowUpIcon';

const icons = { ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon };
const types = { button: 'button', submit: 'submit', reset: 'reset'};

const ActionsData = {
  label: 'Button',
  onClick: fn(),
}

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs', 'dev'],
  argTypes: {
    type: {
      description: 'Define the button type. The options are: <code>button</code>, <code>submit</code> and <code>reset</code>',
      mapping: types,
      options: Object.keys(types),
      control: {
        type: 'select',
        labels: {
          button: 'button',
          submit: 'submit',
          reset: 'reset'
        }
      }
    },
    label: {
      description: 'Defines the main text that will be displayed inside the button.',
      // table: {
      //   disable: true
      // }
    },
    variant: {
      description: "Define the visual importance of the button. The options are: <code>primary</code>, <code>secondary</code> and <code>tertiary</code>."
    },
    size: {
      control: { type: 'radio' },
      description: 'Define the button size. The options are: <code>xl</code>, <code>lg</code>, <code>md</code>, <code>sm</code> and <code>xs</code>',
    },
    startIcon: {
      description: 'Receives an icon component (e.g., Lucide, Material Icons) to be rendered before the text (on the left).',
      mapping: icons,
      options: Object.keys(icons),
      control: {
        type: 'select',
        labels: {
          ArrowLeftIcon: 'ArrowLeftIcon',
          ArrowRightIcon: 'ArrowRightIcon',
          ArrowUpIcon: 'ArrowUpIcon'
        }
      }
    },
    endIcon: {
      description: 'Receives an icon component (e.g., Lucide, Material Icons) to be rendered after the text (on the right).',
      mapping: icons,
      options: Object.keys(icons),
      control: {
        type: 'select',
        labels: {
          ArrowLeftIcon: 'ArrowLeftIcon',
          ArrowRightIcon: 'ArrowRightIcon',
          ArrowUpIcon: 'ArrowUpIcon'
        }
      }
    },
    iconProps: {
      description: 'An object containing properties that will be passed to the icon components (e.g., size, color, strokeWidth), allowing you to customize the icons without changing the button.',
      control: false
    },
    onClick: {
      description: 'It performs a function when the button is clicked.'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled the button.'
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'This is a button component.',
        label: 'Olá'
      }
    }
  },
  args: {
    ...ActionsData
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleButton: Story = {};

// export const Primary: Story = {
//   args: {
//     label: 'Button',
//     variant: 'primary',
//     startIcon: ArrowLeftIcon
//   }
// }
