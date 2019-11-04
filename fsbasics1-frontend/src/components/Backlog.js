import React, { Component } from "react";
import ProjectTask from "./ProjectTask";
import AddProjectTask from "./AddProjectTask";

//Add props
export class Backlog extends Component {
  render() {
    const { projectTaskList } = this.props;
    return (
      <div className="container mt-3">
        <AddProjectTask addToPTList={this.props.addToPTList} />
        <hr className="mb-5" />
        <div className="alert alert-success text-center" role="alert">
          <h4 className="alert-heading">Project Tasks!</h4>
        </div>
        <ul className="list-group">
          {//Implement a map function
          //check unique key prop
          // we are passing state data as props
          projectTaskList.map(projectTask => (
            <ProjectTask
              key={projectTask.id}
              ptprop={projectTask}
              findById={this.props.loadProjectTaskToForm}
              deletePTFromList={this.props.deletePTFromList}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Backlog;
