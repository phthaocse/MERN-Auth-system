import React, { Component } from "react";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: "",
      lastname: "",
      name: "",
      date_birth: "",
      email: "",
      password: "",
      password_confirm: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      name: this.state.name,
      date_birth: this.state.date_birth,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password_confirm
    };
    console.log(newUser);
  };
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center ml-5 my-3">
          <div className="col-md-8">
            <a
              href="/"
              className="btn-flat wave-effect"
              style={{ fontSize: 25 }}
            >
              <i class="fas fa-arrow-circle-left mr-2" />
              Back to home
            </a>
          </div>
        </div>
        <div className="row justify-content-center centered-form mx-5">
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
                          onChange={this.onChange}
                          value={this.state.firstname}
                          error={this.state.errors}
                          id="firstname"
                          type="text"
                          className="form-control input-sm"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <input
                          onChange={this.onChange}
                          value={this.state.lastname}
                          error={this.state.errors}
                          id="lastname"
                          type="text"
                          className="form-control input-sm"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <input
                          onChange={this.onChange}
                          value={this.state.name}
                          error={this.state.errors}
                          id="name"
                          type="text"
                          className="form-control input-sm"
                          placeholder="User Name"
                        />
                      </div>
                    </div>
                    <div className="col">
                      {" "}
                      <div className="form-group">
                        <input
                          onChange={this.onChange}
                          value={this.state.date_birth}
                          error={this.state.errors}
                          id="date_birth"
                          type="text"
                          className="form-control input-sm"
                          placeholder="Date of birth: dd-mm-yyyy"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      onChange={this.onChange}
                      value={this.state.email}
                      error={this.state.errors}
                      id="email"
                      type="text"
                      className="form-control input-sm"
                      placeholder="Email"
                    />
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="form-group">
                        <input
                          onChange={this.onChange}
                          value={this.state.password}
                          error={this.state.errors}
                          id="password"
                          type="password"
                          className="form-control input-sm"
                          placeholder="Password "
                        />
                      </div>
                    </div>
                    <div className="col">
                      {" "}
                      <div className="form-group">
                        <input
                          onChange={this.onChange}
                          value={this.state.password_confirm}
                          error={this.state.errors}
                          id="password_confirm"
                          type="password"
                          className="form-control input-sm"
                          placeholder="Password confirm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group form-control-lg">
                    <button className="btn btn-lg btn-primary btn-block" type="submit" onSubmit={this.onSubmit}>
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
