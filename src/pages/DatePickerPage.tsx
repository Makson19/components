import React from 'react';
import DatePicker from '../components/DatePicker';
import { isValid } from 'date-fns';

const DatePickerPage = () => {
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
    <div>
      <h1 className='title'>DatePicker</h1>

      <div className='section-container'>
        <DatePicker
          label='label'
          id='date-picker'
          onChange={handleChange}
          value={value}
          onBlur={handleBlur}
          meta={{ touched, error }}
          isClearable
          onClearField={() => setValue(null)}
        />
      </div>

      <div className='section-container'>
        <DatePicker
          label='label'
          labelPosition='left'
          id='date-picker1'
          views={['year']}
        />
      </div>

      <div className='section-container'>
        <DatePicker
          label='label'
          labelPosition='left'
          id='date-picker2'
          variant='standard'
          disabled
        />
      </div>
    </div>
  )
}

export default DatePickerPage;
