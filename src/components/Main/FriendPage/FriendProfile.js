import React from "react";
import { Image } from "react-bootstrap";

function FriendProfile(props) {
  let friend = props.data;
  console.log(friend);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "10px",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src={friend.profileImage}
          width={50}
          style={{ borderRadius: "22.5px" }}
        />
        <div style={{ marginLeft: "15px" }}>
          <span style={{ fontSize: "14px", fontWeight: "700" }}>
            {friend.name}
          </span>
          <p style={{ fontSize: "12px", margin: 0 }}>{friend.statusMessage}</p>
        </div>
      </div>
      <div
        style={{
          border: "1.5px solid #4caf50",
          textAlign: "center",
          borderRadius: "50px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          fontSize: "12px",
          padding: "0 8px",
        }}
      >
        Dive - Ed Sheeran ▶
      </div>
    </div>
    //<div>
    // <div style={{}}>{friend.profileImage}</div>
    //{friend.name}
    //  {friend.statusMessage}
    // </div>
  );
}

export default FriendProfile;
