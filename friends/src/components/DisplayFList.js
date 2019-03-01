import React from 'react';

import FriendCard from './FriendCard';

class DisplayFList extends React.Component {

    state = {
        friend: this.props.activeFriend || {
            name: '',
            age: '',
            email: ''
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.activeFriend && prevProps.activeFriend !== this.props.activeFriend) {
            this.setState({
                friend: this.props.activeFriend
            });
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

    handleSubmit = e => {
        e.preventDefault();
        if (this.props.activeFriend) {
            this.props.updateFriend(e, this.state.friend);
        } else {
            this.props.addFriend(e, this.state.friend);
        }
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
    return(
        <div>
            <section>
                {this.props.friendsList.map((friend, index) => (
                    <FriendCard 
                    friend={friend} 
                    key={index} 
                    deleteFriend={this.props.deleteFriend}
                    setUpdateForm={this.props.setUpdateForm}
                    />
                ))}
            </section>
            <section>
                <form onSubmit={e => this.handleSubmit(e)}>
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
                    <button>{`${this.props.activeFriend ? 'Update' : 'Add New'} Friend`}</button>
                </form>
            </section>
        </div>
    );

  }
}

export default DisplayFList;