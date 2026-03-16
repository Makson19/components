import type { Meta, StoryObj } from '@storybook/react-vite';
import AutoComplete from '../components/AutoComplete';

const ActionData = {
  inputProps: {
    placeholder: 'Selecione...'
  },
  options: [
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' }
  ]
}

const meta = {
  title: 'Components/AutoComplete',
  component: AutoComplete,
  tags: ['autodocs', 'dev'],
  args: {
    ...ActionData
  },
  argTypes: {
    label: {
      description: 'Descriptive text displayed above or next to the field.',
    },
    labelPosition: {
      description: 'Defines the alignment of the label relative to the field.'
    },
    disabled: {
      description: 'When <code>true</code>, disables interaction with the component and applies disabled state visual styles.'
    },
    options: {
      description: 'An array of objects representing the selectable options, where each object should have a <code>value</code> and a <code>label</code>.'
    },
    freeSolo: {
      description: 'Allows users to input values that are not present in the predefined options list.'
    },
    inputProps: {
      description: 'Props that control the input value.<br/><br/>' + 
        '- <code><strong>id</strong></code>: A unique identifier for the HTML element, used for accessibility (linking the label to the input).<br/><br/>' +
        '- <code><strong>placeholder</strong></code>: Text displayed when the input is empty, guiding the user on what to enter.<br/><br/>' +
        '- <code><strong>value</strong></code>: The current value of the input field, making it a controlled component.<br/><br/>' +
        '- <code><strong>onChange</strong></code>: A callback function that is triggered when the input value changes, receiving the new value as an argument.<br/><br/>' +
        '- <code><strong>maxLength</strong></code>: Specifies the maximum number of characters allowed in the input.<br/><br/>'
    },
    autoCompleteProps: {
      description: 'Props that control the autocomplete behavior.<br/><br/>' +
        '- <code><strong>value</strong></code>: The currently selected value from the options, making it a controlled component.<br/><br/>' +
        '- <code><strong>onChange</strong></code>: A callback function that is triggered when the selected value changes, receiving the new value as an argument.<br/><br/>' +
        '- <code><strong>onBlur</strong></code>: A callback function that is triggered when the input loses focus, receiving the blur event as an argument.<br/><br/>' +
        '- <code><strong>onFocus</strong></code>: A callback function that is triggered when the input gains focus.<br/><br/>' +
        '- <code><strong>loading</strong></code>: A boolean that indicates whether the options are currently being loaded, which can be used to display a loading indicator.<br/><br/>'
    },
    meta: {
      description: 'An object typically sourced from form libraries (such as Formik or React Final Form) to manage validation and error states.',
      control: false
    },
    fetchOptions: {
      description: 'Function responsible for dynamically searching for options.'
    },
    inputFormatFunction: {
      description: 'Function used to format the value.'
    },
    onlyNumbers: {
      description: 'It only allows numbers to be entered in the field.'
    },
    disableClearButton: {
      description: 'When <code>true</code>, hides the clear button that allows users to clear the selected value.'
    }
  }
} satisfies Meta<typeof AutoComplete>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleAutoComplete: Story = {};
