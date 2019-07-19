import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ backgroundColor: "#e3f2fd" }}
      >
        <div>
          {" "}
          <a
            className="navbar-brand"
            href="/"
            style={{
              fontFamily: "monospace",
              fontSize: 30,
              textDecoration: 'none'
            }}
          >
            MERN LOGIN SYSTEM
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
