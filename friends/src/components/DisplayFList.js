import React from 'react';
import axios from 'axios';

import FriendCard from './FriendCard';

class DisplayFList extends React.Component {

    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    }

    handleChanges = e => {
        e.persist();
        this.setState(prevState => ({ 
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        }));
    };

    addName = (e, name, age, email) => {
        e.preventDefault();
        const newFriend = {
            name: name,
            age: age,
            email: email
        }
        console.log(newFriend);
        // axios
        // .post(`https://localhost:5000/friends`, newFriend)
        // .then(res => console.log(res))
        // .catch(err => console.log(err));
    }

    submitFriend = e => {
        this.setState({ 
            friend: {
                name: '',
                age: '',
                email: ''
            }
         })
         this.addName(e, this.state.friend.name, Number(this.state.friend.age), this.state.friend.email)
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
                        value={this.state.friend.name}
                        name="name"
                        onChange={this.handleChanges}
                    />
                    <input 
                        type="number"
                        value={this.state.friend.age}
                        name="age"
                        onChange={this.handleChanges}
                    />
                    <input 
                        type="text"
                        value={this.state.friend.email}
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