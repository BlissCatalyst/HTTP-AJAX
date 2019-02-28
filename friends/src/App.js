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

  addFriend = (e, friend) => {
    e.preventDefault();
    friend.age = Number(friend.age);
    axios
    .post('http://localhost:5000/friends', friend)
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)});
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
        <DisplayFList friendsList={this.state.friendsList} addFriend={this.addFriend} />
      </div>
    );
  }
}

export default App;
