import React, { Component } from "react";
import studentservice from "../services/StudentService";

class ViewStudentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      studente: {},
    };
  }

  componentDidMount() {
    studentservice.getStudentById(this.state.id).then((res) => {
      this.setState({ studente: res.data });
    });
  }

  render() {
    return (
      <div>
        <br></br>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View studente Details</h3>
          <div className="card-body">
            <div className="row">
              <label> studente First Name: </label>
              <div> {this.state.studente.firstName}</div>
            </div>
            <div className="row">
              <label> studente Last Name: </label>
              <div> {this.state.studente.lastName}</div>
            </div>
            <div className="row">
              <label> studente Email ID: </label>
              <div> {this.state.studente.emailId}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewStudentComponent;
