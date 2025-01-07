import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


export default function LabTabs({tabItems, tabContents}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            {tabItems.map((item,index) => {
              return (
                <Tab label={item} value={index} />
              )
            })}
            
           
          </TabList>
        </Box>
        {tabContents.map((item,index) => {
          return (
            <TabPanel value={index}>{item}</TabPanel>
          )
        })}
       
      
      </TabContext>
    </Box>
  );
}
