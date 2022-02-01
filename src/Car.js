import React from 'react';

class CarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carColor: "red" };
  }
  render() {
    return <h2>I am a {this.state.carColor} Car!</h2>;
  }
}

export default CarComp;
