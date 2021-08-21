import React from "react";
import { BsFillChatFill } from "react-icons/bs";

function Login(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 50,
        width: "100%",
        height: "100vh",
        alignItems: "center",
        backgroundColor: "#FEE500",
      }}
    >
      <BsFillChatFill size={150} color="#333" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" placeholder="ID" style={{ marginBottom: "5px" }} />
        <input type="password" placeholder="Password" />
        <button
          onClick={() => {
            props.login();
          }}
          style={{
            marginTop: "20px",
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            padding: "5px",
          }}
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default Login;
