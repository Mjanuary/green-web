import React, { useState } from "react";

import "./App.css";
import CreateAccount from "./components/CreateAccount";
import Navigation from "./components/Navigation";

function App() {
  const [active, setActive] = useState("CREATE-ACCOUNT");

  return (
    <>
      <Navigation setActive={setActive} active={active} />
      {active === "CREATE-ACCOUNT" && <CreateAccount />}
    </>
  );
}

export default App;
