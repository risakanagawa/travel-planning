import React from "react";

const ProjectDetail = (props) => {
    console.log(props)
    const id = props.match.params.id;
  return (
    <div>
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">title = {id}</span>
            <p>Something</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by aaa</div>
            <div>Date</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
