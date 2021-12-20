import logo from './logo.svg';
import './App.css';
import Msreport from './Components/Reports/Milestone_value_report';
import './Components/Reports/Report.css';
import Routes from './Routes/Routes';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Routes />

    </div>
  );
}

export default App;
