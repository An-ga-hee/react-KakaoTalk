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
        padding: "46px 0 25px",
        boxSizing: "border-box",
      }}
    >
      <h1 style={{ fontSize: "22px", fontWeight: "700" }}>친구</h1>
      <div style={{ display: "flex", gap: "25px", justifyContent: "flex-end" }}>
        <BsSearch size={20} style={{ color: "#777" }} />
        <BsPersonPlusFill size={25} style={{ color: "#777" }} />
      </div>
    </div>
  );
}

export default FriendHeader;
