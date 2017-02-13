import React, { Component } from 'react';
import DataGrid from 'react-datagrid';
import { Button } from 'react-bootstrap';
import UserStore from '../../stores/UsersStore';
import UserActions from '../../actions/UserActions';
import 'react-datagrid/index.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users  
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
    this.handleSortChange = () => {};
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.users != this.props.users){
      this.setState({ users: nextProps.users });
    }
  }
  
  renderSearchBar() {
    // TODO
    return null;
  }

  render () {
    const users = this.state.users;
    return (
      <div style={{ float: "left", marginRight: 50 }}>
        {this.renderSearchBar()}
        <DataGrid
          ref="DataGrid"
          idProperty="id"
          withColumnMenu={false}
          columns={this.columns}
          dataSource={users}
          emptyText="No Items"
          style={{ height: 200, width:250 }}
        />
      </div> 
    );  
  }
}

export default List;

