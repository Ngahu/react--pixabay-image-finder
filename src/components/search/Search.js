import React, { Component } from 'react'

import  TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';



export  class Search extends Component {
    state = {
        searchText:'',
        amount:15,
        apiUrl:'https://pixabay.com/api/',
        apiKey:'8789577-ac9acb03ab03d52cd026ad8a0',
        images:[]
    };

    onTextChange = (e) => {
      this.setState({[e.target.name]: e.target.value}, () => {
        //running a callback 

        axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=false`)
          .then(res => this.setState({images:res.data.hits }))
          .catch(err =>console.log(err));

      });
    };


    onAmountChange = (e, index, value) => this.setState({amount:value});


  render() {
    console.log(this.state.images);
    return (
      <div>
        <TextField

        name="searchText"
        value={this.state.searchText}
        onChange={this.onTextChange}
        floatingLabelText = "Search For Images"
        fullWidth={true}
        />
        <br/>
        <SelectField
        name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </SelectField>
        <br/>
      </div>
    )
  }
}
