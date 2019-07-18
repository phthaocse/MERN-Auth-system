import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div align="center" className="m-5">
        <h3>
          <b>Build</b> a login/auth app with the{" "}
          <span style={{ fontFamily: "monospace" }}>MERN</span> stack from
          scratch
        </h3>
        <p className="flow-text grey-text text-darken-1">
          Create a (minimal) full-stack app with user authentication via
          passport and JWTs
        </p>
        <div className="container">
          <div className="row align-items-start m-3">
            <div className="col">
              <a
                href="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-primary .btn-lg hoverable blue accent-3"
              >
                REGISTER
              </a>
            </div>
          </div>
          <div className="row align-items-center m-3">
            <div className="col">
              <a
                href="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-primary .btn-lg hoverable blue accent-3"
              >
                LOGIN
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
