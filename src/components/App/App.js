
import './App.css';
import UserComp from '../UserComp/usercomp';
import Home from "../Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserComp />
      </header>
      <Home />
    </div>
  );
}

export default App;
