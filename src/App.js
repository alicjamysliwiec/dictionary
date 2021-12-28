import logo from './images/logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <h1 className='title'>
          Dictionary
        </h1>
      </header>
    </div>
  );
}

export default App;
