import React, { Fragment, Component } from "react";
import NavBar from "./components/NavBar";
import Backlog from "./components/Backlog";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar title="Backlog View - Props" />
        <Backlog />
      </Fragment>
    );
  }
}

export default App;
