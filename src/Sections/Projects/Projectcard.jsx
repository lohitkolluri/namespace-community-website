import React from 'react';
import './projectCard.css'; // Import your CSS file for styling
import ProjectDescriptionCard from './ProjectDescriptionCard';

const ProjectCard = ({ projectData }) => {
  const { title, description, techUsed, ownerName, deploymentLink, githubLink, imageUrl } = projectData;

  return (
    <div className="main-project">
      <div className="project-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project-details">
        <ProjectDescriptionCard
          title={title}
          description={description}
          techUsed={techUsed}
          ownerName={ownerName}
          deploymentLink={deploymentLink}
          githubLink={githubLink}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
