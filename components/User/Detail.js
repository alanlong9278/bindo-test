import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class Detail extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    // TODO: show user detail
    const user = this.props.user;
    const leftStyle = { width:45, float: "left", marginRight:20, textAlign: "right" };
    const rightStyle = {width:300, wordWrap: "break-word", wordBreak: "break-all", float: "left" };
    const data = _.map(user, (value, key) => {
          return ([
            (<dt style={leftStyle}>{key}: </dt>),
            (<dd style={rightStyle}>{value}</dd>)
          ]);
        });
    return (
      <div style={{ float: "left", width: 450 }}>
        <h2> Detail Show </h2>
        <dl>
          {data}
        </dl>
      </div>
    );  
  }
}

Detail.propTypes = {
  user: PropTypes.object.isRequired
};

export default Detail;
