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
    "/rewards": "/Rewards/Rewards.js",
    "/questionnaire": "/Questionnaire/Questionnaire",
    "/become a member": "/Become%20a%20member/Become%20a%20member.js",
    "/sign in": "/Sign%20in/Sign%20in.js",
    "/usercomp": "",
    "/actions": ""
  };
 
  return (

    <div className="App">
      <Routes>
        <Route path={paths["/"]} element={<Home />} />
        <Route path={paths["/rewards"]} element={<Rewards />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/become a member" element={<BecomeAMember />} />
        <Route path="/sign in" element={<SignIn />} />
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
