import './App.css';
import { numbersCombined } from './AppExtra.js';
import CarComp from './Car.js';

class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ' ' + this.model + '.'
  }
}
const myCar = new Model("Ford", "Mustang");

let hello = () => {
  return "The use of hello as a telephone greeting has been credited to Thomas Edison; according to one source, he expressed his surprise with a misheard Hullo.";
};

const myArray = ['Apple', 'Google', 'Meta'];
const myList = myArray.map((item) => <div>{item}</div>);

const myelement = <h3 className="myclass">JSX className</h3>;

function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

function MissedGoal() {
  return <h3>MISSED!</h3>;
}

function MadeGoal() {
  return <h3>Goal!</h3>;
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal)
    return <MadeGoal/>;
  else
    return <MissedGoal/>;
}

function App() {
  return (
    <div className="App">
      Hello! {myCar.show()}
      <br></br>
      <div class="hello">{hello()}</div>
      <br></br>
      <div>{myList}</div>
      <br></br>
      <div>{numbersCombined}</div>
      <br></br>
      <div>{myelement}</div>
      <br></br>
      <div><CarComp color="blue" /></div>
      <div id="carColor"></div>
      <br></br>
      <Football />
      <br></br>
      <Goal isGoal={true} />
      <br></br>
    </div>
  );
}

export default App;
