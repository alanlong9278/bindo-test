import React, { Component } from 'react';
import Detail from './User/Detail';
import List from './User/List';
import UsersStore from '../stores/UsersStore';
import UserActions from '../actions/UserActions';

class User extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      isShowDetail: false,
      users: UsersStore.getState().users
    };

    this.onShowDetail = (id) => {
      const user = this.state.users.find((user) => user.id == id);
      this.setState({ isShowDetail: true, user });  
    };

    this.onChange = () => {
      this.setState({
        users: UsersStore.getState().users
      });
    }
  }

  componentDidMount() {
    UsersStore.addChangeListener(this.onChange);
    UserActions.listUsers();  
  }

  componentWillUnmount() {
    UsersStore.removeChangeListener(this.onChange);
  }
  
  renderDetail() {
    if (this.state.isShowDetail) {
      return <Detail user={this.state.user} />
    } else {
      return null;
    }
  }

  render () {
    return (
      <div>
        <List users={this.state.users} onShowDetail={this.onShowDetail} />
        {this.renderDetail()}
      </div>
    );  
  }
}

export default User;
