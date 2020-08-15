import React from "react";
import { Card } from "@material-ui/core";
import Logo from "../../assets/nav-logo.svg";

class Navbar extends React.Component {
  render() {
    return (
      <div style={{ position: "fixed", width: "100%" }}>
        <Card
          style={{
            height: "5rem",
            padding: "14px",
          }}
        >
          <img src={Logo} alt="logo" height="50px" style={{ float: "left" }} />
          <div style={{ float: "right", height: "100%" }}>
            <div
              style={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              <a href="/" style={{ textDecoration: "none" }}>
                Posts
              </a>
              <a
                href="/"
                style={{ textDecoration: "none", marginLeft: "2rem" }}
              >
                Members
              </a>
              <a
                href="/"
                style={{ textDecoration: "none", marginLeft: "2rem" }}
              >
                Log Out
              </a>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default Navbar;
