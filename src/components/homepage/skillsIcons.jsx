import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import INFO from "../../data/user";
import "./styles/skillsIcons.css";

const SkillIcons = (props) => {
    const { height} = props;
	// const { getAll} = icons;
	const [openIconId, setMyValue] = useState(0);
	const handleToggleSize = (id) => {
		setMyValue(id);
	};

	return (
		<div className="icons-container1">
			{INFO.techonolgies.map((icon, index) => (
				<div onMouseEnter={() => handleToggleSize(icon.id)} onMouseLeave={() => handleToggleSize(0)} className={`icon-container1 h${height}`} key={index} >
                {/* <div onClick={() => handleToggleSize(icon.id)} className="icon-container1" key={index} > */}
					<div className="icon-item">
						<img className={openIconId === icon.id ? "icon1": "icon1"} src={icon.icon} alt={icon.alt}/>
					</div>
                    {/* <span className={`icon-title1 ${openIconId === icon.id  ? 'visible1' : ''}`}>{icon.title}</span> */}
					{openIconId === icon.id && (
						<div className="icon-title1">
							<span>{icon.title}</span>
						</div>
					)}
				</div>
			))}
		</div>
	);
}; //<div>
// 	className={`project-card ${isExpanded ? "expanded" : ""}`}
// 	onClick={handleCardClick}
// >
// 	<div className="project-logo">
// 		<img src={logo} alt="logo" />
// 	</div>
// 	<div className="project-title">{title}</div>
// 	<div className="project-description">{description}</div>
// 	{isExpanded && (
// <div className="project-task-title">Tasks
// 		<div className="project-tasks">
//   <div dangerouslySetInnerHTML={tasks} />
//   </div>
// 		</div>
// 	)}
// 	<div className="project-link">
// 		<div onClick={handleCardClick} className="project-link-icon">
// 			<FontAwesomeIcon icon={faLink} /> {isExpanded ?'Read less...': 'Read more...'}
// 		</div>
// 	</div>
// </div>
//);
//};

export default SkillIcons;
