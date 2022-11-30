import React, { useState } from "react";

import "./App.css";
import CreateAccount from "./components/CreateAccount";
import Dashboard from "./components/Dashboard";
import Navigation from "./components/Navigation";
import Login from "./components/Login";

function App() {
  const [active, setActive] = useState("LOGIN");
  const [user, setUser] = useState(null);

  const LoginSuccess = (user) => {
    setUser(user);
    setActive("DASHBOARD");
  };

  return (
    <>
      {active === "CREATE-ACCOUNT" && (
        <>
          <Navigation setActive={setActive} active={active} />
          <CreateAccount />
        </>
      )}

      {active === "LOGIN" && (
        <>
          <Navigation setActive={setActive} active={active} />
          <Login
            LoginSuccess={LoginSuccess}
            back={() => setActive("CREATE-ACCOUNT")}
          />
        </>
      )}

      {active === "DASHBOARD" && (
        <Dashboard back={() => setActive("LOGIN")} user={user} />
      )}
    </>
  );
}

export default App;
