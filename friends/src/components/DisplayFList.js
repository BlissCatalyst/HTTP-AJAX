import React from 'react'

import FriendCard from './FriendCard';

const DisplayFList = props => {

    return(
      <section>
          {props.friendsList.map((friend, index) => (
              <FriendCard friend={friend} key={index} />
          ))}
      </section>
    );
  }

export default DisplayFList;