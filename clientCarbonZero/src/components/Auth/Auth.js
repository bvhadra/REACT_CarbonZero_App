import "./index.css";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from '../../lib/supabaseclient'

export default function App() {
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
    return <div>Logged in!</div>;
  }
}
