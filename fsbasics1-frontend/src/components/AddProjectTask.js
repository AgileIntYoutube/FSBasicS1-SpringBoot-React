import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export class AddProjectTask extends Component {
  state = {
    summary: "",
    description: "",
    issueType: "",
    status: ""
  };

  static propTypes = {
    updatePTFunc: PropTypes.func.isRequired
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/backlog", this.state)
      .then(res => this.props.updatePTFunc(res.data))
      .catch(error => console.log(error.message));

    this.clearStateAfterSubmit();
  };

  clearStateAfterSubmit = () => {
    this.setState({
      summary: "",
      description: "",
      issueType: "",
      status: ""
    });
  };

  render() {
    const { summary, description, issueType, status } = this.state;

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
                  className="form-control"
                  name="summary"
                  value={summary}
                  onChange={this.handleChange}
                />
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
                  className="form-control"
                  value={issueType}
                  onChange={this.handleChange}
                >
                  <option>Choose...</option>
                  <option>User Story</option>
                  <option>Bug</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="status">Status</label>
                <select
                  name="status"
                  className="form-control"
                  value={status}
                  onChange={this.handleChange}
                >
                  <option>Choose...</option>
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
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
