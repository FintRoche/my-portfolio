import React, { useState } from "react";
import INFO from "../../data/user";
import "./styles/skillsIcons.css";

const SkillIcons = (props) => {
    const { height, skillIds} = props;
	// const { getAll} = icons;
	const [openIconId, setMyValue] = useState(0);
	const handleToggleSize = (id) => {
		setMyValue(id);
	};
	const skills = props.skillIds ? INFO.techonolgies.filter((t) => skillIds.includes(t.id)) : INFO.techonolgies;

	return (
		<div className="icons-container1">
			{skills.map((icon, index) => (
				<div onMouseEnter={() => handleToggleSize(icon.id)} onMouseLeave={() => handleToggleSize(0)} className={`icon-container1 h${height}`} key={index} >
					<div className="icon-item">
						<img className={openIconId === icon.id ? "icon1": "icon1"} src={icon.icon} alt={icon.alt}/>
					</div>
					{openIconId === icon.id && (
						<div className="icon-title1">
							<span>{icon.title}</span>
						</div>
					)}
				</div>
			))}
		</div>
	);
}; 

export default SkillIcons;
