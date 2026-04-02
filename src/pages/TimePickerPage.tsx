import React from 'react';
import TimePicker from '../components/TimePicker';
import { isValid } from 'date-fns';

const TimePickerPage = () => {
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
      <h1 className='title'>TimePicker</h1>

      <div className='section-container'>
        <TimePicker
          label='TimePicker'
          id='timepicker01'
          isClearable
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          meta={{ touched, error }}
          onClearField={() => setValue(null)}
        />
      </div>

      <div className='section-container'>
        <TimePicker
          label='TimePicker'
          labelPosition='left'
          id='timepicker02'
          variant='standard'
        />
      </div>
    </div>
  )
};

export default TimePickerPage;
