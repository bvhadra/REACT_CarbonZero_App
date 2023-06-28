// component for authenticating users before they are signed in to see their results and save data to supabase database
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
// import supabase from '../../lib/supabaseclient'
import ResultPage from "../ResultPage/resultpage";
// import "../../../.env";

const supabase = createClient("REACT_APP_SUPABASE_URL", "REACT_APP_SUPEBASE_ANON_KEY");


export default function Authenticate() {
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

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{
          style: {
            container: { height: "40%", width: "40%", margin: "0 auto" },
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
    );
  } else {
    return <ResultPage />;
  }
}
