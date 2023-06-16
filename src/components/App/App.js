import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Rewards from "../Rewards/Rewards";
import BecomeAMember from "../BecomeAMember/BecomeAMember";
import SignIn from "../SignIn/SignIn";
import Questionnaire from "../UserComp/usercomp";
import UserComp from "../UserComp/usercomp";
import { Actions } from "../Actions/Actions";
import "./App.css";
import Results from "../Results/Results";
import ResultsPage from "../ResultsPage/ResultsPage";

function App() {

  //paths object for routing files to be rendered by app component using react router
  const paths = {
    "/": "",
    "/rewards": "/Rewards",
    "/questionnaire": "/Questionnaire",
    "/become a member": "/BecomeAMember",
    "/sign in": "/SignIn",
    // "/usercomp": "",
    "/actions": "",
    "/results": "/Results"
  };
 
  return (
    <div className="App">
      <Routes>
        <Route path={paths["/"]} element={<Home />} />
        <Route path={paths["/rewards"]} element={<Rewards />} />
        {/* <Route path={paths["/questionnaire"]} element={<Questionnaire />} /> */}
        <Route path={paths["/become a member"]} element={<BecomeAMember />} />
        <Route path={paths["/sign in"]} element={<SignIn />} />
        <Route path={paths["/questionnaire"]} element={<UserComp />} />
        <Route path={paths["/actions"]} element={<Actions />} />
        <Route path={paths["/results"]} element={<ResultsPage/>} />
      </Routes>
    </div>
  );
}

export default App;
