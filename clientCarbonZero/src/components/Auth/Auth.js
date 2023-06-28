// component for authenticating users before they are signed in to see their results and save data to supabase database
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
// import { Link } from "react-router-dom";
import supabase from "../../lib/supabaseclient";
// import SeeResultsButton from "../SeeResultsButton/SeeResultsButton";
import ResultPage from "../ResultPage/resultpage";
import Navbar from "../Navbar/Navbar";
import { useContext } from "react";
import { TotalContext } from "../../context/TotalContext";
import Home from "../Home/Home";
import PostGraph from "../PostGraph/PostGraph";

export default function Authenticate() {
  const { total } = useContext(TotalContext);
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  console.log(total);
  console.log(session);

  if (!session) {
    return (
      <div className="auth-main-div">
        <Navbar />
        <Auth
          redirectTo={"/Questionnaire"}
          supabaseClient={supabase}
          appearance={{
            style: {
              container: { height: "30%", width: "50%", margin: "0 auto" },
              button: {
                background: "#29524a",
                color: "white",
                marginTop: "20px",
                width: "100%",
                height: "70px",
                alignItems: "center",
              },
              anchor: { color: "#000000", textDecoration: "none" },
              divider: { color: "green" },
              label: { fontSize: "20px", fontWeight: "300", color: "#000000" },
              input: {
                height: "40px",
                width: "100%",
                color: "green",
                padding: "10px",
                fontSize: "20px",
                fontWeight: "300",
              },
              loader: { color: "green" },
              message: { color: "green" },
            },
          }}
        />
      </div>
    );

  } else {
    return (
    <p>Logged In!</p>
    )
  }
}


  // } else if (
  //   total.travel === 0 &&
  //   total.energy === 0 &&
  //   total.clothing === 0 &&
  //   total.food === 0
  // ) {
  //   return <Home />;
  // } else {
  //   return (
  //     <>
  //       <ResultPage />
  //       <PostGraph />
  //     </>
  //   );

// useContext to get the total state to this part of the app.
//if total state untouched, direct them to home page and dont update database
// if total state has value then divert to results page and send data to db
// if !session then render sign up, else render
