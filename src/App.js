import logo from './logo.svg';
import './App.css';
import Login from './auth/Login';
function App() {
  return (
    <div className="App">
     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login and Signup page
        </p>
       
      </header>
      <div>
        <Login/>
    </div>
    </div>
  );
}

export default App;
