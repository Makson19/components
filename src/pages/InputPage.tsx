import React from 'react';
import Input from '../components/Input';
import SearchIcon from '../icons/SearchIcon';

function InputPage() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [isTouched, setIsTouched] = React.useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);
    if (e.target.value.trim() === '') {
      setError('Este campo é obrigatório');
    } else {
      setError('');
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    // Remove o erro enquanto o usuário digita
    if (e.target.value.trim() !== '') {
      setError('');
    }
  }

  return (
    <div>
      <h1 className='title'>Input</h1>

      <div className='section-container'>
        <Input
          label='Label'
          inputProps={{
            id: 'input-1',
            placeholder: 'Input...',
            disabled: true
          }}
        />
      </div>

      <div className='section-container'>
        <Input
          label='Label'
          labelPosition='left'
          inputProps={{
            id: 'input-2',
            placeholder: 'Input...'
          }}
        />
      </div>

      <div className='section-container'>
        <Input
          label='Label'
          variant='standard'
          inputProps={{
            id: 'input-3',
            placeholder: 'Input...'
          }}
        />
      </div>

      <div className='section-container'>
        <Input
          label='Label'
          labelPosition='left'
          variant='standard'
          inputProps={{
            id: 'input-4',
            placeholder: 'Input...'
          }}
        />
      </div>

      <div className='section-container'>
        <Input
          label='Input com validação'
          startIcon={SearchIcon}
          endIcon={SearchIcon}
          inputProps={{
            id: 'input-5',
            onBlur: handleBlur,
            onChange: handleChange,
            value: value,
            placeholder: 'Digite algo...'
          }}
          meta={{ touched: isTouched, error: error }}
        />
      </div>

      <div className='section-container'>
        <Input
          label='Label'
          inputProps={{
            id: 'input-6',
            placeholder: 'Input...',
            type: 'datetime-local',
            onChange: (e) => {
              console.log(e.target.value)
              const date = new Date(e.target.value);
              console.log('date', date)
            }
          }}
        />
      </div>

      <div className='section-container'>
        <Input
          label='Label'
          inputProps={{
            id: 'input-6',
            placeholder: 'Input...',
            type: 'time',
            onChange: (e) => {
              console.log(e.target.value)
              const date = new Date(e.target.value);
              console.log('date', date)
            }
          }}
        />
      </div>
    </div>
  )
}

export default InputPage;
