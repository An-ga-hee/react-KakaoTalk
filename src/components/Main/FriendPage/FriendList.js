import React from "react";
import FriendProfile from "./FriendProfile";
import friendImage from "../../../images/friendProfile.png";

function FriendList() {
  let friendList = [
    { name: "현", profileImage: friendImage, statusMessage: "test" },
    { name: "은미", profileImage: friendImage, statusMessage: "test1" },
    { name: "승전", profileImage: friendImage, statusMessage: "test2" },
    { name: "현", profileImage: friendImage, statusMessage: "test" },
    { name: "은미", profileImage: friendImage, statusMessage: "test1" },
    { name: "승전", profileImage: friendImage, statusMessage: "test2" },
    { name: "현", profileImage: friendImage, statusMessage: "test" },
    { name: "은미", profileImage: friendImage, statusMessage: "test1" },
    { name: "승전", profileImage: friendImage, statusMessage: "test2" },
  ];

  const renderFriendProfile = () => {
    var array = [];
    friendList.map((friend) => {
      array.push(<FriendProfile key={friend.name} data={friend} />);
    });

    return array.sort(function (a, b) {
      return a.props.data.name > b.props.data.name ? 1 : -1;
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        margin: "15px 0",
      }}
    >
      <div style={{ fontSize: "12px", color: "#888", marginBottom: "15px" }}>
        친구&nbsp;&nbsp;{friendList.length}
      </div>
      {renderFriendProfile()}
    </div>
  );
}

export default FriendList;
