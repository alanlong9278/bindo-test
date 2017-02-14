import React, { Component } from 'react';
import DataGrid from 'react-datagrid';
import { Button } from 'react-bootstrap';
import 'react-datagrid/index.css';
import sorty from 'sorty';
import _ from 'lodash';
import UserStore from '../../stores/UsersStore';
import UserActions from '../../actions/UserActions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      sortInfo: [],
      users: props.users,  
      searchUsers: []
    };
    this.columns = [
      {
        name: 'id',
        title: '#',
        width: 50,
        type: 'number',
        render: (value) => {
          return (<Button bsStyle="link" onClick={() => this.props.onShowDetail(value)}>{value}</Button>);
        }
      },
      { name: 'name', width: 100 },
      { name: 'age', width: 100 }
    ];

    this.handleSortChange = (nextSortInfo) => {
      let sortInfo = [];
      if (nextSortInfo.length === 0) { 
        sortInfo = _.forEach(this.state.sortInfo, (sort) => { 
        sort.dir = sort.dir === 0 ? 1 : 0;
      })} else if (nextSortInfo.length === 1 ) {
        sortInfo = nextSortInfo;
      } else {
        sortInfo.push(nextSortInfo[nextSortInfo.length - 1]);  
      }
      this.setState({ sortInfo, users: sorty(sortInfo, this.state.users) });
    };

    this.handleChange = (e) => {
      const value = e.currentTarget.value; 
      const users = value.length > 0 ? _.filter(this.state.users, (user) => user.id.toString().includes(value) || user.name.includes(value)) : this.state.users;
      this.setState({ searchValue: value, searchUsers: users });
    };
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.users != this.props.users){
      this.setState({ users: nextProps.users });
    }
  }
  
  render () {
    const state = this.state;
    return (
      <div style={{ float: "left", marginRight: 50 }}>
        <h2> User List</h2>
        <div style={{ marginBottom: 20 }}>
          <span> Search: </span>
          <input
            type="text"
            onChange={this.handleChange}
            placeholder="Search By ID/Name"
            value={state.searchValue}
          />
        </div>
        <DataGrid
          ref="DataGrid"
          idProperty="id"
          withColumnMenu={false}
          sortInfo={this.state.sortInfo}
          onSortChange={this.handleSortChange}
          columns={this.columns}
          dataSource={state.searchValue.length > 0 ? state.searchUsers : state.users}
          emptyText="No Items"
        />
      </div> 
    );  
  }
}

export default List;

