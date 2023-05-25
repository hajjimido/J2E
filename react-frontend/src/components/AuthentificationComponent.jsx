import React, { Component } from "react";

class AuthentificationComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="d-flex justify-content-sm-center">
        <form className="w-75 p-3 mt-5">
          <div class="form-outline mb-4">
            <input type="email" id="form2Example1" class="form-control" />
            <label class="form-label" for="form2Example1">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" />
            <label class="form-label" for="form2Example2">
              Password
            </label>
          </div>

          <div class="row mb-4">
            <div class="col">
              <a href="#!">create account</a>
            </div>
          </div>

          <button type="button" class="btn btn-primary btn-block mb-4">
            Sign in
          </button>
        </form>
      </div>
    );
  }
}
export default AuthentificationComponent;
