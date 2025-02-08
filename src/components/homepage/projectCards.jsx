import React, { useState } from "react";
import "./styles/projectCards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";
import SkillIcons from "./skillsIcons"


const ProjectCard = ({ project }) => {
	const { logo, title, description, tasks } = project;
	const [isExpanded, setIsExpanded] = useState(false);

	const handleCardClick = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<div
			className={`project-card ${isExpanded ? "expanded" : ""}`}
			onClick={handleCardClick}
		>
			<div className="project-logo">
				<img src={logo} alt="logo" />
			</div>
			<div className="project-title">{title}</div>
      {isExpanded && (<SkillIcons height="20"/> )}
			<div className="project-description">{description}</div>
			{isExpanded && (
        <div className="project-task-title">Tasks
				<div className="project-tasks">
          <div dangerouslySetInnerHTML={tasks} />
          </div>
				</div>
			)}
			<div className="project-link">
				<div onClick={handleCardClick} className="project-link-icon">
					<FontAwesomeIcon icon={faLink} /> {isExpanded ?'Read less...': 'Read more...'}
				</div>
			</div>
		</div>
	);
};

const ProjectCards = () => {
	return (
		<div className="project-cards-container">
			{INFO.projects.map((project, index) => (
				<ProjectCard key={index} project={project} />
			))}
		</div>
	);
};

export default ProjectCards;
