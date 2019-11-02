import React from "react";
import PropTypes from "prop-types";

//you can turn this into an arrow function
//pass the destructuring instead of props
function ProjectTask(props) {
  const { issueType, description, status, summary } = props.ptprop;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="badge badge-success badge-pill">{status}</span>
      <p>{summary}</p>

      <p>{description}</p>
      <p>{issueType}</p>
    </li>
  );
}

ProjectTask.propTypes = {
  ptprop: PropTypes.object.isRequired
};

export default ProjectTask;
