import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddProjectTask extends Component {
  render() {
    return (
      <div className="card mb-1">
        <div className="card-header bg-success text-light">
          Add Backlog Item
        </div>
        <div className="card-body">
          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="summary">Summary</label>
                <input type="text" className="form-control" name="summary" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="issueType">Issue Type</label>
                <select name="issueType" className="form-control">
                  <option>Choose...</option>
                  <option>User Story</option>
                  <option>Bug</option>
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="status">Status</label>
                <select name="status" className="form-control">
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

AddProjectTask.propTypes = {};

export default AddProjectTask;
