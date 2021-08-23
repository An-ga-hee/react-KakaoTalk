import React from "react";
import FriendHeader from "./FriendPage/FriendHeader";
import FriendList from "./FriendPage/FriendList";
import MyProfile from "./FriendPage/MyProfile";

function FriendPage() {
  return (
    <div style={{ width: "100%", marginLeft: "80px", padding:"0 25px" }}>
      <FriendHeader />
      <MyProfile />
      <FriendList />
    </div>
  );
}

export default FriendPage;
