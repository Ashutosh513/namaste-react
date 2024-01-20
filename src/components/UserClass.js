import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };

    console.log('Child Constructor');
  }

  componentDidMount() {
    console.log('Child Component Did Mount');
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log('Child Render');

    return (
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: Uttar Pradesh</h3>
        <h4>Contact: ashu@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
