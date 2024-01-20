import React, { Component } from 'react';
import UserClass from './UserClass';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('Parent Constructor');
  }

  componentDidMount() {
    console.log('Parent Component Did Mount');
  }

  render() {
    console.log('Parent Render');
    return (
      <div>
        <h1>About Us</h1>
        <h2>Learning React From Namaste React</h2>
        <UserClass name={'Ashutosh'} />
        <UserClass name={'IAS'} />
      </div>
    );
  }
}

export default About;
