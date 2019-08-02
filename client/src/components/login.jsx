import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
    this.props.loginUser(userData);
    
  };
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center ml-5 my-3">
          <div className="col-md-6">
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
          <div className="col-md-6">
            <div className="card card-primary ">
              <div className="card-header text-white bg-dark mb-3">
                <h3 className="card-title">
                  LOGIN
                </h3>
              </div>
              <div className="card-body mb-3">
                <form action="" onSubmit={this.onSubmit} className="role">
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

                  <div className="form-group form-control-lg">
                    <button
                      className="btn btn-lg btn-primary btn-block"
                      type="submit"
                      onSubmit={this.onSubmit}
                    >
                      Sign in
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

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
