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

function App() {
  return (
    <div className="App">
      Hello! {myCar.show()}
    </div>
  );
}

export default App;
