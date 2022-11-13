import logo from './logo.svg';
import './App.css';
import Nav from './Header';
import { Footer as EndOf } from './Footer';
import SlidData from './Slider';

function App() {


  return (
    <div className="App">
      <Nav logoName='M-React' fLink='Home' sLink='About' tLink='Contact' />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <SlidData />
      </header>
      <EndOf clr='Red' />
    </div>
  );
}

export default App;
