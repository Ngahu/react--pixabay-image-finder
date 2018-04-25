import React, { Component } from 'react';

import './App.css';

import { Navbar } from './components/navbar/Navbar';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">  
      <Navbar/>
      
      </div>
       </MuiThemeProvider>
    );
  }
}

export default App;
