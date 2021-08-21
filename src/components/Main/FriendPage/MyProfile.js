import React from "react";
import myprofile from "../../../images/myprofile.jpg";
import { Image } from "react-bootstrap";

function MyProfile() {
  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "30px",
        borderBottom: "1px solid #ddd",
        margin: "0 25px",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image src={myprofile} width={60} style={{ borderRadius: "22.5px" }} />
        <div
          style={{ marginLeft: "15px", fontSize: "14px", fontWeight: "700" }}
        >
          가희
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
          marginRight: "25px",
        }}
      >
        Dive - Ed Sheeran ▶
      </div>
    </div>
  );
}

export default MyProfile;
