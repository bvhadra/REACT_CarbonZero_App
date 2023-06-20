import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Rewards from "../Rewards/Rewards";
import BecomeAMember from "../BecomeAMember/BecomeAMember";
import SignIn from "../SignIn/SignIn";
import Questionnaire from "../UserComp/usercomp";
import UserComp from "../UserComp/usercomp";
import Actions from "../Actions/Actions";
import "./App.css";
import ResultPage from '../ResultPage/resultpage';
import { TotalContext } from '../../context/TotalContext'
import { useState } from 'react'



function App() {

  const [total, setTotal] = useState({
    travel: 0,
    food: 0,
    energy: 0,
    clothing: 0,
  });
  

  //paths object for routing files to be rendered by app component using react router
  const paths = {
    "/": "",
    "/rewards": "/Rewards",
    "/questionnaire": "/Questionnaire",
    "/become a member": "/BecomeAMember",
    "/sign in": "/SignIn",
    // "/usercomp": "",
    "/actions": "/Actions",
  };
 
  return (
    <TotalContext.Provider value={{ total, setTotal }}>
    <div className="App">
      <Routes>
        <Route path={paths["/"]} element={<Home />} />
        <Route path={paths["/rewards"]} element={<Rewards />} />
        {/* <Route path={paths["/questionnaire"]} element={<Questionnaire />} /> */}
        <Route path={paths["/become a member"]} element={<BecomeAMember />} />
        <Route path={paths["/sign in"]} element={<SignIn />} />
        <Route path={paths["/questionnaire"]} element={<UserComp />} />
        <Route path={paths["/actions"]} element={<Actions />} />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </div>
    </TotalContext.Provider>
  );
}

export default App;
