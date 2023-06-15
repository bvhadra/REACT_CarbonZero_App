
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Rewards from "../Rewards/Rewards";
import Questionnaire from "../Questionnaire/Questionnaire";
import UserComp from '../UserComp/usercomp';
// import UserComp from '../UserComp/usercomp';
import { Actions } from "../Actions/Actions";
import "./App.css";




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/quetionnaire" element={<Questionnaire />} />
        <Route path="/usercomp" element={<UserComp />} />
        <Route path="/actions" element={<Actions />} />
      </Routes>
      {/* <header className="App-header">
        <UserComp />
      </header> */}
    </div>
  );
}

export default App;
