import React from 'react'

import FriendCard from './FriendCard';

class DisplayFList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: [],
            email: ''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    addName = (e, name, age, email) => {
        e.preventDefault();
        const newFriend = {
            name: name,
            age: age,
            email: email
        }
        console.log(newFriend);
    }

    submitFriend = e => {
        this.setState({ 
            name: '',
            age: [],
            email: ''
         })
         this.addName(e, this.state.name, this.state.age, this.state.email)
    };

    render() {
    return(
        <div>
            <section>
                {this.props.friendsList.map((friend, index) => (
                    <FriendCard friend={friend} key={index} />
                ))}
            </section>
            <section>
                <form onSubmit={this.submitFriend}>
                    <input 
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChanges}
                    />
                    <input 
                        type="number"
                        value={this.state.age}
                        name="age"
                        onChange={this.handleChanges}
                    />
                    <input 
                        type="text"
                        value={this.state.email}
                        name="email"
                        onChange={this.handleChanges}
                    />
                    <button>Submit</button>
                </form>
            </section>
        </div>
    );

  }
}

export default DisplayFList;