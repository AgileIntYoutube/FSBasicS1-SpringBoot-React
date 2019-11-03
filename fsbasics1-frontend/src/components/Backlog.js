import React, { Component } from "react";
import ProjectTask from "./ProjectTask";
import axios from "axios";
import AddProjectTask from "./AddProjectTask";

export class Backlog extends Component {
  state = {
    projectTaskList: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/backlog")
      .then(res => this.setState({ projectTaskList: res.data }));
  }

  updatePTList = newProjectTask => {
    this.setState({
      projectTaskList: [...this.state.projectTaskList, newProjectTask]
    });
  };

  render() {
    const { projectTaskList } = this.state;
    return (
      <div className="container mt-3">
        <AddProjectTask updatePTFunc={this.updatePTList} />
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
