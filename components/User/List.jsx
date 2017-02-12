import React, { Component } from 'react';

class List extends Component {
  constructor() {
    super();
  }
  
  renderSearchBar() {
    // TODO
    return null;
  }

  renderUserList() {
    // TODO
    return null;
  }

  render () {
    return (
      {this.renderSearchBar()}
      {this.renderUserList()}
    );  
  }
}

export default List;

