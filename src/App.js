import './App.css';

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
}

function App() {
  return (
    <div className="App">
      Hello! {myCar.show()}
      <br></br>
      <div class="hello">{hello()}</div>
      <br></br>
    </div>
  );
}

export default App;
