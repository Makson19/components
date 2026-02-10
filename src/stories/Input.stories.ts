import type { Meta, StoryObj } from '@storybook/react-vite';
import Input from '../components/Input';
import SearchIcon from '../icons/SearchIcon';

const icons = { SearchIcon };

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs', 'dev'],
  argTypes: {
    label: {
      description: 'Descriptive text displayed above or next to the input field.',
    },
    labelPosition: {
      description: 'Defines the alignment of the label relative to the input.'
    },
    iconProps: {
      description: 'An object containing properties that will be passed to the icon components (e.g., size, color, strokeWidth), allowing you to customize the icons without changing the button.',
      control: false
    },
    startIcon: {
      description: 'Icon component (e.g., from Lucide or FontAwesome) to be displayed at the <strong>beginning</strong> of the field.',
      mapping: icons,
      options: Object.keys(icons),
      control: {
        type: 'select',
        labels: {
          SearchIcon: 'SearchIcon'
        }
      }
    },
    endIcon: {
      description: 'Icon component to be displayed at the <strong>end</strong> of the field.',
      mapping: icons,
      options: Object.keys(icons),
      control: {
        type: 'select',
        labels: {
          SearchIcon: 'SearchIcon'
        }
      }
    },
    variant: {
      description: 'Defines the visual style of the input: with a full border (<code>outlined</code>) or a simplified style (<code>standard</code>).'
    },
    inputProps: {
      description: "Accepts all <a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#attributes' target='_blank' rel='noopener noreferrer'>Native properties</a> of an HTML <code>input</code> (e.g. <code>placeholder</code>, <code>type</code>, <code>onChange</code>, <code>disabled</code>).",
      control: false
    },
    meta: {
      description: 'An object typically sourced from form libraries (such as Formik or React Final Form) to manage validation and error states.',
      control: false
    }
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleInput: Story = {};
