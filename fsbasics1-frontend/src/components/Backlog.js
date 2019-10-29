import React, { Component } from "react";
import ProjectTask from "./ProjectTask";

export class Backlog extends Component {
  state = {
    projectTaskList: [
      {
        id: 1,
        issueType: "UserStory-1",
        summary: "Test User Story in state",
        description: "This is a test user story",
        status: "IN_PROGRES"
      },
      {
        id: 2,
        issueType: "UserStory-2",
        summary: "Test User Story in state",
        description: "This is a test user story",
        status: "IN_PROGRES"
      },
      {
        id: 3,
        issueType: "UserStory-3",
        summary: "Test User Story in state",
        description: "This is a test user story",
        status: "IN_PROGRES"
      }
    ]
  };

  render() {
    const { projectTaskList } = this.state;
    return (
      <div className="container mt-3">
        <hr className="mb-5" />
        <div className="alert alert-success text-center" role="alert">
          <h4 className="alert-heading">Project Tasks!</h4>
        </div>
        <ul className="list-group">
          {//Implement a map function
          //check unique key prop
          // we are passing state data as props
          projectTaskList.map(projectTask => (
            <ProjectTask key={projectTask.id} ptprop={projectTask} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Backlog;
