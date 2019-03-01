import React from 'react';

const FriendCard = props => {

    return(
        <div>
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <h3>E-mail: {props.friend.email}</h3>
            <button onClick={e => props.deleteFriend(e, props.friend.id)}>Delete Friend</button>
            <button onClick={e => props.setUpdateForm(e, props.friend)}>Update Friend</button>
        </div>
    );
}

export default FriendCard;