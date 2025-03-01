import logo from './logo.svg';
import './App.css';
import TagManager from 'react-gtm-module';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    const tagManagerArgs = {
        gtmId: 'GTM-TSVM3FWS'
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => {window.alert('hello world')}}>Click on the button</button>
        <p>
          Edit <code>src/App.js</code> and save to reload it
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
