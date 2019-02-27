import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import DisplayFList from './components/DisplayFList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friendsList: []
    };
  }

  componentDidMount() {
    axios
    .get('http://localhost:5000/friends')
    .then(res => {
      this.setState({ friendsList: res.data });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div>
        <DisplayFList friendsList={this.state.friendsList} />
      </div>
    );
  }
}

export default App;
