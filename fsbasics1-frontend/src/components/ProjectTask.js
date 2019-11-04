import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import axios from "axios";

//you can turn this into an arrow function
//pass the destructuring instead of props
function ProjectTask(props) {
  
  const deleteProjectTask = id => {
    axios
      .delete(`http://localhost:8080/backlog/${id}`)
      .then(res => {
        props.deletePTFromList(id);
        console.log(res.data);
      })
      .catch(error => console.log(error.message));
  };

  const { id, issueType, description, status, summary } = props.ptprop;
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="badge badge-success badge-pill">{status}</span>
      <p>{summary}</p>

      <p>{description}</p>
      <p>{issueType}</p>
      <Link to={`/update/${id}`}>
        <i
          className="far fa-edit"
          style={{ color: "green" }}
          onClick={props.findById.bind(this, id)}
        />
      </Link>
      <i
        type="button"
        className="fas fa-trash-alt"
        style={{ color: "red" }}
        onClick={deleteProjectTask.bind(this, id)}
      ></i>
    </li>
  );
}

ProjectTask.propTypes = {
  ptprop: PropTypes.object.isRequired
};

export default ProjectTask;
