import React, { Fragment, Component } from "react";
import NavBar from "./components/NavBar";
import Backlog from "./components/Backlog";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <Backlog />
      </Fragment>
    );
  }
}

export default App;
