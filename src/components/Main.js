import React from "react";
import Nav from "./Main/Nav";
import FriendPage from "./Main/FriendPage";
import ChatPage from "./Main/ChatPage";
import MorePage from "./Main/MorePage";

function Main() {
  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      <Nav />
      <FriendPage />
      {/* <ChatPage />
      <MorePage /> */}
    </div>
  );
}

export default Main;
