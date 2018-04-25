import React, { Component } from 'react'

import  TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';


export  class Search extends Component {
    state = {
        searchText:'',
        amount:15,
        apiUrl:'https://pixabay.com/api/',
        apiKey:'8789577-ac9acb03ab03d52cd026ad8a0',
        images:[]
    }
  render() {
    return (
      <div>
        <TextField

        name="SearchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText = "Search For Images"
        fullWidth={true}
        />
      </div>
    )
  }
}
