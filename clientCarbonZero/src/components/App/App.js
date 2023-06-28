import { Route, Routes } from "react-router-dom";
import { TotalContext } from "../../context/TotalContext";
import { useState } from "react";
import Home from "../Home/Home";
import Rewards from "../Rewards/Rewards";
import BecomeAMember from "../BecomeAMember/BecomeAMember";
import SignIn from "../SignIn/SignIn";
import UserComp from "../UserComp/usercomp";
import Actions from "../Actions/Actions";
import Authenticate from "../Auth/Auth";
import ResultPage from "../ResultPage/resultpage";
import Action from "../Action/Action";
import "./App.css";

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
    "/becomeamember": "/BecomeAMember",
    "/signin": "/SignIn",
    "/results": "/Results",
    "/actions": "/Actions",
    "/actions/:id": "/Actions/:id",
    "/resultpage": "/ResultPage",
    "/auth": "/Auth"
  };

  // below we are routing the paths to the function element contained in that component.
  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      <div className="App">
        <Routes> 
          <Route path={paths["/"]} element={<Home />} />
          <Route path={paths["/rewards"]} element={<Rewards />} />
          <Route path={paths["/becomeamember"]} element={<BecomeAMember />} />
          <Route path={paths["/signin"]} element={<SignIn />} />
          <Route path={paths["/questionnaire"]} element={<UserComp />} />
          <Route path={paths["/actions"]} element={<Actions />} />
          <Route path={paths["/actions/:id"]} element={<Action />} />
          <Route path={paths["/resultpage"]} element={<ResultPage />} />
          <Route path={paths["/auth"]} element={<Authenticate />} />
        </Routes>
      </div>
    </TotalContext.Provider>
  );
}

export default App;
