import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import classnames from "classnames";

export class AddProjectTask extends Component {
  state = {
    summary: "",
    description: "",
    issueType: "",
    status: "",
    errors: {}
  };

  static propTypes = {
    updatePTFunc: PropTypes.func.isRequired
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { summary, issueType, status } = this.state;

    if (summary === "") {
      this.setState({ errors: { summary: "Please select a valid summary" } });
      return;
    }

    if (issueType === "") {
      this.setState({
        errors: { issueType: "Please select a valid issueType" }
      });
      return;
    }

    if (status === "") {
      this.setState({ errors: { status: "Please select a valid status" } });
      return;
    }

    this.postAPICall(this.state);
  };

  postAPICall = ptInState => {
    axios
      .post("http://localhost:8080/backlog", ptInState)
      .then(res => {
        this.props.updatePTFunc(res.data);
        this.clearStateAfterSubmit();
      })
      .catch(error => console.log(error.message));
  };

  clearStateAfterSubmit = () => {
    this.setState({
      summary: "",
      description: "",
      issueType: "",
      status: "",
      errors: {}
    });
  };

  render() {
    const { summary, description, issueType, status, errors } = this.state;

    return (
      <div className="card mb-1">
        <div className="card-header bg-success text-light">
          Add Backlog Item
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="summary">Summary</label>
                <input
                  type="text"
                  className={classnames("form-control", {
                    "is-invalid": errors.summary
                  })}
                  name="summary"
                  value={summary}
                  onChange={this.handleChange}
                />
                {errors.summary && (
                  <div className="invalid-feedback">{errors.summary}</div>
                )}
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="issueType">Issue Type</label>
                <select
                  name="issueType"
                  className={classnames("form-control", {
                    "is-invalid": errors.issueType
                  })}
                  value={issueType}
                  onChange={this.handleChange}
                >
                  <option>Choose...</option>
                  <option>User Story</option>
                  <option>Bug</option>
                </select>
                {errors.issueType && (
                  <div className="invalid-feedback">{errors.issueType}</div>
                )}
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  className={classnames("form-control", {
                    "is-invalid": errors.status
                  })}
                  value={status}
                  onChange={this.handleChange}
                >
                  <option>Choose...</option>
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
                {errors.status && (
                  <div className="invalid-feedback">{errors.status}</div>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-danger mr-3">
              Clear Form
            </button>

            <button type="submit" className="btn btn-success">
              Add Backlog Item
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddProjectTask;
