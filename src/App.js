import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import React, { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    setIsLogin(true);
  };

  return (
    <div className="App">{isLogin ? <Main /> : <Login login={login} />}</div>
  );
}

export default App;
