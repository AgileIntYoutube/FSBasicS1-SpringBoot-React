import React, { Fragment, Component } from "react";
import NavBar from "./components/NavBar";
import Backlog from "./components/Backlog";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UpdateProjectTask from "./components/UpdateProjectTask";

export class App extends Component {
  /*
  We want the app to perform a GET api call when we load our application.
  So that we can render the list from the server and NOT from a hard-coded array.
  For this we need to decide what component will load this to the application
  How it will be passed on to the component that is in charge of rendering the data
  */

  state = {
    projectTaskList: [],
    projectTask: {}
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/backlog")
      .then(res => this.setState({ projectTaskList: res.data }));
  }

  addToPTList = newProjectTask => {
    this.setState({
      projectTaskList: [...this.state.projectTaskList, newProjectTask]
    });
  };

  updatePTList = updatedProjectTask => {
    this.setState({
      projectTaskList: [
        ...this.state.projectTaskList.map(projectTask =>
          projectTask.id === updatedProjectTask.id
            ? (projectTask = updatedProjectTask)
            : projectTask
        )
      ]
    });
  };

  deletePTFromList = id => {
    console.log("Delete Called");

    this.setState({
      projectTaskList: [
        ...this.state.projectTaskList.filter(
          projectTask => projectTask.id !== id
        )
      ]
    });
  };

  loadProjectTaskToForm = id => {
    this.setState({
      projectTask: this.state.projectTaskList.find(task => task.id === id)
    });

    console.log("PT " + this.state.projectTask);
  };

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar title="Backlog View - Props" />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Backlog
                  projectTaskList={this.state.projectTaskList}
                  addToPTList={this.addToPTList}
                  loadProjectTaskToForm={this.loadProjectTaskToForm}
                  deletePTFromList={this.deletePTFromList}
                />
              )}
            />
            <Route
              exact
              path="/update/:id"
              render={props => (
                <UpdateProjectTask
                  {...props}
                  projectTask={this.state.projectTask}
                  updatePTList={this.updatePTList}
                />
              )}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
