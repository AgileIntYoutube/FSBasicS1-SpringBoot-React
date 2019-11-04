import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import classnames from "classnames";

export class UpdateProjectTask extends Component {
  state = {
    id: this.props.projectTask.id,
    summary: this.props.projectTask.summary,
    description: this.props.projectTask.description,
    issueType: this.props.projectTask.issueType,
    status: this.props.projectTask.status,
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
    const { id } = this.props.match.params;
    console.log("params " + id);

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

    this.putAPICall(this.state, id);
  };

  putAPICall = (ptInState, pathVarId) => {
    axios
      .put(`http://localhost:8080/backlog/${pathVarId}`, ptInState)
      .then(res => {
        this.props.updatePTList(res.data);
        this.clearStateAfterSubmit();
        this.props.history.push("/");
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
    const {summary, description, issueType, status, errors } = this.state;

    return (
      <div className="card mb-1">
        <div className="card-header bg-success text-light">
          Update Backlog Item
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
            <button
              type="button"
              className="btn btn-danger mr-3"
              onClick={this.clearStateAfterSubmit}
            >
              Clear Form
            </button>

            <button type="submit" className="btn btn-success">
              Update Backlog Item
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default UpdateProjectTask;
