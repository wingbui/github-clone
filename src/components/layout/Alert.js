import React, { Component } from 'react';

export default class Alert extends Component {
  render() {
    const { msg, type } = this.props.alert;
    return (
      <div className={`alert alert-${type}`}>
        <p>
          <i className="fa fa-info-circle"></i>
          {msg}
        </p>
      </div>
    );
  }
}
