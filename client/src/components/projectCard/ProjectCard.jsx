import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/gig/${project._id}`} className="link">
      <div className="projectCard">
        <img src={project.cover} alt="" />
        <div className="info">
          <img src="/img/noavatar.jpg" alt="" />
          <div className="texts">
            <h2>{project.desc}</h2>
            <span>{project.cat}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
