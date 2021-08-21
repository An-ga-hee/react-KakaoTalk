import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsPersonPlusFill } from "react-icons/bs";

function FriendHeader() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        margin: "46px 25px 25px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "22px", fontWeight: "700" }}>친구</h1>
      <div>
        <BsSearch size={20} style={{ marginRight: "25px", color: "#777" }} />
        <BsPersonPlusFill
          size={25}
          style={{ color: "#777", marginRight: "25px" }}
        />
      </div>
    </div>
  );
}

export default FriendHeader;
