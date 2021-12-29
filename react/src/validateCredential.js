import React from 'react';

class ValidateCrdential extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Your user name: {this.props.cred}</h1>;
  }
}

export default ValidateCrdential;
