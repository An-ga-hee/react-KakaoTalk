import React from "react";
import { BsPersonFill } from "react-icons/bs";
import { BsFillChatFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

function Nav() {
  return (
    <div
      style={{
        width: "80px",
        height: "100vh",
        backgroundColor: "#ececec",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 40,
        paddingTop: "45px",
      }}
    >
      <BsPersonFill size={30} color="#999" />
      <BsFillChatFill size={23} color="#999" />
      <BsThreeDots size={25} color="#999" />
    </div>
  );
}

export default Nav;
