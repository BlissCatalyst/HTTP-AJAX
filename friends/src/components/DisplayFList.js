import React from 'react';

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
                ...prevState.friend,
                [e.target.name]: e.target.value
            }
        }));
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
                <form onSubmit={e => this.props.addFriend(e, this.state.friend)}>
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
                    <button>Add New Friend</button>
                </form>
            </section>
        </div>
    );

  }
}

export default DisplayFList;