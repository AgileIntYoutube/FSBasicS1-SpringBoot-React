import React, { Component } from "react";
import ProjectTask from "./ProjectTask";

export class Backlog extends Component {
  render() {
    const projectTask = {
      id: 1,
      issueType: "UserStory",
      summary: "Test User Story",
      description: "This is a test user story",
      status: "IN_PROGRES"
    };
    return (
      <div className="container mt-3">
        <hr className="mb-5" />
        <div className="alert alert-success text-center" role="alert">
          <h4 className="alert-heading">Backlog items</h4>
        </div>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="badge badge-success badge-pill">IN PROGRESS</span>
            <p> Sample 1</p>

            <p>Sample Description 1</p>
            <p>Story</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="badge badge-success badge-pill">IN PROGRESS</span>
            <p> Sample 2</p>

            <p>Sample Description 2</p>
            <p>Story</p>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            <span className="badge badge-success badge-pill">IN PROGRESS</span>
            <p> Sample 3</p>

            <p className="text-justify">Sample Description 3</p>
            <p>Story</p>
          </li>
          <ProjectTask ptprop={projectTask} />
        </ul>
      </div>
    );
  }
}

export default Backlog;
