import React, { Fragment, Component } from "react";
import NavBar from "./components/NavBar";
import Backlog from "./components/Backlog";
import "./App.css";

export class App extends Component {

  
  /*
  We want the app to perform a GET api call when we load our application.
  So that we can render the list from the server and NOT from a hard-coded array.
  For this we need to decide what component will load this to the application
  How it will be passed on to the component that is in charge of rendering the data
  */


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
