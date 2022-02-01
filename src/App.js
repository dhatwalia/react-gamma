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
      <div><CarComp color="blue"/></div>
    </div>
  );
}

export default App;
