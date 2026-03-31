import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DatePicker from '../components/DatePicker';
import { isValid } from 'date-fns';

const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs', 'dev'],
  argTypes: {
    label: {
      description: 'Descriptive text displayed above or next to the date picker field.',
      control: {
        type: 'text'
      }
    },
    labelPosition: {
      description: 'Defines the alignment of the label relative to the date picker.'
    },
    id: {
      description: 'A unique identifier for the date picker field, used for accessibility and form handling.'
    },
    name: {
      description: 'The name attribute for the date picker input, used in form submissions and data handling.'
    },
    placeholder: {
      description: 'Temporary text displayed in the date picker input providing a hint or example of what the user should type.'
    },
    views: {
      description: 'An array that specifies which date or time views are available for selection in the date picker (e.g., year, month, day, hours, minutes).'
    },
    isClearable: {
      description: 'Enables the button to clear the date picker value.'
    },
    onClearField: {
      description: 'Function used to clear the value of the date picker',
    },
    onBlur: {
      description: 'Function triggered when the date picker field loses focus, often used for validation purposes.',
    },
    onChange: {
      description: 'Function triggered when the date picker value changes, receiving the new date as an argument.',
    },
    onAccept: {
      description: 'Function triggered when a date is selected and accepted, receiving the selected date as an argument.',
    },
    value: {
      description: 'The current value of the date picker, typically a Date object or null.',
    },
    disabled: {
      description: 'Disables the date picker, preventing user interaction and indicating that the field is not editable.'
    },
    meta: {
      description: 'An object typically sourced from form libraries (such as Formik or React Final Form) to manage validation and error states.',
      control: false
    }
  }
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SimpleDatepicker: Story = {};

export const DatepickerWithLabel: Story = {
  args: {
    label: 'Select a date',
    id: 'date-picker',
    name: 'date-picker'
  }
};

export const SelectOnlyTheMonth: Story = {
  args: {
    label: 'Select a month',
    views: ['month'],
    id: 'month-picker',
  }
};

export const DisabledDatepicker: Story = {
  args: {
    label: 'Disabled date picker',
    disabled: true,
  }
};

export const ControlledComponentAndWithValidation: Story = {
  render: () => {
    const [value, setValue] = React.useState<Date | null>(null);
    const [touched, setTouched] = React.useState(false);
    const [error, setError] = React.useState<string | undefined>();

    const validate = (date: Date | null) => {
      if (!date) {
        return 'Campo obrigatório';
      }
      if (!isValid(date)) {
        return 'Data inválida';
      }
      return undefined;
    };

    const handleChange = (date: Date | null) => {
      setValue(date);
      if (touched) {
        setError(validate(date));
      }
    };

    const handleBlur = () => {
      setTouched(true);
      setError(validate(value));
    };

    return (
      <DatePicker
        label='label'
        id='date-picker-with-validation'
        onChange={handleChange}
        value={value}
        onBlur={handleBlur}
        meta={{ touched, error }}
        isClearable
        onClearField={() => setValue(null)}
      />
    )
  }
}

