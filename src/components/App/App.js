import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Rewards from "../Rewards/Rewards";
import BecomeAMember from "../BecomeAMember/BecomeAMember";
import SignIn from "../SignIn/SignIn";
import Questionnaire from "../UserComp/usercomp";
import UserComp from "../UserComp/usercomp";
import { Actions } from "../Actions/Actions";
import "./App.css";

function App() {
  const paths = {
    "/": "",
    "/rewards": "/Rewards/Rewards",
    "/questionnaire": "/Questionnaire/Questionnaire",
    "/become a member": "/BecomeAMember/BecomeAMember",
    "/sign in": "/SignIn/SignIn",
    "/usercomp": "",
    "/actions": ""
  };
 
  return (
    <div className="App">
      <Routes>
        <Route path={paths["/"]} element={<Home />} />
        <Route path={paths["/rewards"]} element={<Rewards />} />
        <Route path={paths["/questionnaire"]} element={<Questionnaire />} />
        <Route path={paths["/become a member"]} element={<BecomeAMember />} />
        <Route path={paths["/sign in"]} element={<SignIn />} />
        <Route path={paths["/usercomp"]} element={<UserComp />} />
        <Route path={paths["/actions"]} element={<Actions />} />
      </Routes>
      {/* <header className="App-header">
        <UserComp />
      </header> */}
    </div>
  );
}

export default App;
