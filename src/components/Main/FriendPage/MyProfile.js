import React from "react";
import myprofile from "../../../images/myprofile.jpg";
import { Image } from "react-bootstrap";

function MyProfile() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid #ddd",
        paddingBottom: "20px",
        boxSizing: "border-box",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image src={myprofile} width={60} style={{ borderRadius: "22.5px" }} />
        <div
          style={{
            marginLeft: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "14px", fontWeight: "700" }}>가희</span>
          <p style={{ fontSize: "12px", margin: 0 }}>happy</p>
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
  );
}

export default MyProfile;
