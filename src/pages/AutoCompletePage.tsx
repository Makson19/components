import React from 'react';
import AutoComplete from '../components/AutoComplete';
import { Field, Form } from 'react-final-form';

interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: { name: string, url: string };
  name: string;
  origin: { name: string, url: string };
  species: string;
  status: string;
  type: string;
  url: string;
}

interface IOption extends ICharacter {
  value: number | string;
  label: string;
}

const AutoCompletePage = () => {
  const [options, setOptions] = React.useState<IOption[]>([]);
  const [value, setValue] = React.useState<ICharacter | null>(null);
  const [loading, setLoading] = React.useState(false);

  console.log('VALUE', value)

  const fetchCharacter = async (name?: string) => {
    setLoading(true);
    try {
      const url = new URL('https://rickandmortyapi.com/api/character/');
      if (name) {
        const params = { name: name };
        Object.keys(params).forEach((key: string) => url.searchParams.append(key, (params as Record<string, string>)[key]));
      }
      const response = await fetch(url);
      const data = await response.json();
      
      let formattedData = [];
      if (response.ok) {
        formattedData = data?.results?.map((item: ICharacter) => ({
          ...item,
          label: item.name,
          value: item.id,
          key: item.id
        }));
      }
      setOptions(formattedData);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1 className='title'>AutoComplete</h1>

      <section className='section-container'>
        <Form
          onSubmit={(values: any) => console.log(values)}
          render={({ handleSubmit, values }) => {
            console.log('values', values)
            return (
              <form onSubmit={handleSubmit}>
                <Field
                  name='character'
                  render={({ input, meta }) => {
                    return (
                      <AutoComplete
                        freeSolo
                        label='Label'
                        options={options}
                        placeholder='Selecione...'
                        fetchOptions={fetchCharacter}
                        inputProps={{
                          ...input,
                          id: 'auto-1'
                        }}
                        autoCompleteProps={{
                          // onFocus: () => fetchCharacter(),
                          onChange: (_, value: ICharacter) => {
                            setValue(value);
                            input?.onChange(value?.name);
                          },
                          loading: loading,
                          value: value
                        }}
                        meta={meta}
                      />
                    )
                  }}
                />
              </form>
            )
          }}
        />
      </section>
    </div>
  );
};

export default AutoCompletePage;
