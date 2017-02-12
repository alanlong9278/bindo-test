import React, { Component } from 'react';
import List from 'User/List';
import Detail from 'User/Detail';

class User extends Component {
  render () {
    return (
      <div>
        <List />
        <Detail id={id} />
      </div>
    );  
  }
}

export default User;
