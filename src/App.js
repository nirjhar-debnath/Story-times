import React, {useState, useEffect} from 'react';
import {light, dark} from './theme'
import AppContext from './components/AppContext';
import Dashboard from './components/Dashboard'
import TopBar from './components/TopBar'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core'


export default function App() {

  const [appData, setAppData] = useState(null);
  const [theme, setTheme] = useState(true)
  const [searchTerm, setSearchTerm] =  useState("")
  const [searchResults, setSearchResults] = useState([]);
 
  const appliedTheme = createMuiTheme(theme ? light : dark)

  useEffect(() => {
    fetch('https://whispering-depths-57451.herokuapp.com/https://ace.qtstage.io/api/v1/collections/entertainment')
      .then(response => response.json())
      .then(data => {setAppData(data.items);setSearchResults(data.items)});
      
  }, [])

  return (
    <div style={{backgroundColor:theme?"#ecf0f1":"#121212",minHeight:"100vh"}}>
      <ThemeProvider theme={appliedTheme}>
        <AppContext.Provider value={appData}>
          <TopBar theme={theme} setTheme={setTheme} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          <br/>
          <Dashboard searchResults={searchResults} setSearchResults={setSearchResults} searchTerm={searchTerm}/>
        </AppContext.Provider>
      </ThemeProvider>
    </div>
  );
}
