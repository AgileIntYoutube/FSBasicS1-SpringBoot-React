import React, { Fragment } from "react";

function App() {
  const title = "Project Task Frontend From JS const";
  const allGood = true;

  // const test = () => {
  //   if (allGood) {
  //     return "confirmed all good";
  //   }
  // };

  return (
    <Fragment>
      <div className="App">
        <h1>{title}</h1>
        <label htmlFor=""></label>
        <input tabIndex="-1"></input>
        <p>All good </p>
        {allGood ? <p>"ternary"</p> : <p>"false"</p>}
        <div>
          <p> not cool</p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
