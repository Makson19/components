import React from 'react';
import { Tab, TabPanel, Tabs } from '../components/Tabs';

const TabsPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    console.log('newValue', newValue)
    setValue(newValue);
  };

  return (
    <div>
      <h1 className='title'>Tabs</h1>

      <div className='section-container'>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Item 1' value={0} index={0} />
          <Tab label='Item 2' value={1} index={1} />
          <Tab label='Item 3' value={2} index={2} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div style={{ margin: '1rem' }}>
            Content 1
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div style={{ margin: '1rem' }}>
            Content 2
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div style={{ margin: '1rem' }}>
            Content 3
          </div>
        </TabPanel>
      </div>
    </div>
  )
}

export default TabsPage;

