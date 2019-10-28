import React from "react";
import PropTypes from "prop-types";

function ProjectTask(props) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="badge badge-success badge-pill">IN PROGRESS</span>
      <p> Sample 4</p>

      <p>Sample Description child functional component</p>
      <p>Story</p>
    </li>
  );
}

ProjectTask.propTypes = {};

export default ProjectTask;
