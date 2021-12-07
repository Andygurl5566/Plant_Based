// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <button onClick = {() => {
        fetch("/hello")
      }}> click here </button>
      </header>
    </div>
  );
}

export default App;
