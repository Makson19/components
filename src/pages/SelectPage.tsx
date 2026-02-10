import React from 'react';
import Select from '../components/Select';

const SelectPage = () => {
  const [options,] = React.useState([
    { value: '1', label: 'Opção 1' },
    { value: '2', label: 'Opção 2' },
    { value: '3', label: 'Opção 3' },
    { value: '4', label: 'Opção 4' },
    { value: '5', label: 'Opção 5' },
  ]);
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [isTouched, setIsTouched] = React.useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    setIsTouched(true);
    if (e.target.value.trim() === '') {
      setError('Este campo é obrigatório');
    } else {
      setError('');
    }
  }

  return (
    <div>
      <h1 className='title'>Select</h1>

      <div className='section-container'>
        <Select
          label='Label'
          options={options}
          placeholder='Placeholder...'
          selectProps={{
            id: 'select-1',
            value: value,
            onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setValue(e.target?.value),
            onBlur: handleBlur
          }}
          isClearable
          onClearField={() => setValue('')}
          meta={{ touched: isTouched, error: error }}
        />
      </div>

      <div className='section-container'>
        <Select
          label='Label'
          labelPosition='left'
          options={options}
          selectProps={{
            id: 'select-2'
          }}
        />
      </div>

      <div className='section-container'>
        <Select
          label='Label'
          variant='standard'
          options={options}
          selectProps={{
            id: 'select-3'
          }}
        />
      </div>

      <div className='section-container'>
        <Select
          label='Label'
          labelPosition='left'
          variant='standard'
          options={options}
          selectProps={{
            id: 'select-4'
          }}
        />
      </div>

      <div className='section-container'>
        <Select
          label='Label'
          options={options}
          selectProps={{
            id: 'select-5',
            disabled: true
          }}
        />
      </div>
    </div>
  );
};

export default SelectPage;
