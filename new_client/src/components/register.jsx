import React, { Component } from "react";

class Register extends Component {
  state = {};
  render() {
    return (
      <div className="row justify-content-center centered-form m-5">
        <div className="col-md-8">
          <div className="card card-primary ">
            <div className="card-header text-white bg-dark mb-3">
              <h2 className="card-title">
                Please fill all field to register
              </h2>
            </div>
            <div className="card-body mb-3">
              <form action="" className="role">
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-sm"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-sm"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control input-sm"
                    placeholder="Email"
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-sm"
                        placeholder="Password "
                      />
                    </div>
                  </div>
                  <div className="col">
                    {" "}
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control input-sm"
                        placeholder="Password confirm"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group form-control-lg"><button className="btn btn-lg btn-primary btn-block ">Register</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
