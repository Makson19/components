import type { Meta, StoryObj } from '@storybook/react-vite';
import Select from '../components/Select';

const ActionData = {
  options: [
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' }
  ]
}

const meta = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs', 'dev'],
  args: {
    ...ActionData
  },
  argTypes: {
    options: {
      description: 'An array of objects that generates the clickable menu options.',
      control: false
    },
    label: {
      description: 'Descriptive text displayed above or next to the select field',
      control: {
        type: 'text'
      }
    },
    labelPosition: {
      description: 'Defines the alignment of the label relative to the select.'
    },
    variant: {
      description: 'Defines the visual style of the select: with a full border (<code>outlined</code>) or a simplified style (<code>standard</code>).'
    },
    placeholder: {
      description: 'Temporary text displayed in the select element providing a hint or example of what the user should type.'
    },
    selectProps: {
      description: 'An object that allows you to pass any <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/select#attributes" target="_blank" rel="noopener noreferrer">native attribute</a> of an HTML <code>select</code> element (such as <code>id</code>, <code>name</code>, <code>value</code>, <code>onChange</code>, <code>disabled</code>, <code>required</code>, etc.) directly to the inner element.'
    },
    isClearable: {
      description: 'Enables the button to clear the select value.'
    },
    onClearField: {
      description: 'Function used to clear the value of the select',
    },
    meta: {
      description: 'An object typically sourced from form libraries (such as Formik or React Final Form) to manage validation and error states.',
      control: false
    }
  }
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleSelect: Story = {};
