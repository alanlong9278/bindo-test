import React, { Component, PropTypes } from 'react';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    // TODO: show user detail
    const user = this.props.user;
    return (
      <div className="col-xs-4" style={{ float: "left", width: 500 }}>
        <dl className="dl-horizontal dl-xs">
          <dt>ID:</dt>
          <dd>{user.id}</dd>
          <dt>Name:</dt>
          <dd>{user.name}</dd>
          <dt>Phone:</dt>
          <dd>{user.phone}</dd>
          <dt>Profile:</dt>
          <dd>{user.image}</dd>
          <dt>Phrase:</dt>
          <dd>{user.phrase}</dd>
        </dl>
      </div>
    );  
  }
}

Detail.propTypes = {
};

export default Detail;

