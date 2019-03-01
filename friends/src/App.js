import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import DisplayFList from './components/DisplayFList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeFriend: null,
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

  addFriend = (e, friend) => {
    e.preventDefault();
    friend.age = Number(friend.age);
    axios
    .post('http://localhost:5000/friends', friend)
    .then(res => {
      this.setState({
        friendsList: res.data
      });
    })
    .catch(err => {console.log(err)});
  }

  deleteFriend = (e, id) => {
    e.preventDefault();
    axios
    .delete(`http://localhost:5000/friends/${id}`)
    .then(res => {
      this.setState({
        friendsList: res.data
      });
    })
    .catch(err => {console.log(err)});
  }

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
  }

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
    .put(`http://localhost:5000/friends/${friend.id}`, friend)
    .then(res => {
      this.setState({
        friendsList: res.data,
        activeFriend: null
      });
    })
    .catch(err => {console.log(err)});
  }

  render() {
    return (
      <div>
        <DisplayFList 
        friendsList={this.state.friendsList} 
        addFriend={this.addFriend} 
        deleteFriend={this.deleteFriend}
        updateFriend={this.updateFriend}
        setUpdateForm={this.setUpdateForm}
        activeFriend={this.state.activeFriend}
        />
      </div>
    );
  }
}

export default App;
