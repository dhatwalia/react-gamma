import React from 'react';

class CarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { carColor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" })
    }, 1000);
    document.getElementById("carColor").innerHTML =
      "The car color was " + this.state.carColor;
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ favoritecolor: "green" })
    }, 1000);
    document.getElementById("carColor").innerHTML =
      "The car color will be " + this.state.carColor;
  }
  render() {
    return <h2>I am a {this.state.carColor} Car!</h2>;
  }
}

export default CarComp;
