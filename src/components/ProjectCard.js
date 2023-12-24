import React from "react";
import image from "../assets/image3.png";

function ProjectCard() {
  return (
    <div className="project-card">
      <div className="project-card-thumbnail">
        <img src={image} height="100%" width="100%" />
      </div>
      <div className="project-content">
        <div className="project-card-name">PROJECT NAME</div>
        <p className="project-card-technology">
          Tech 1, Tech 2, Tech 3, Tech 4, Tech 5, Tech 6, Tech 7{" "}
        </p>
      </div>
    </div>
  );
}
export default ProjectCard;
