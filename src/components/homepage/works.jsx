import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							
							<div className="work-details">
							
								<div className="work-title">
								<img
								src="./storm-logo.jpeg"
								alt="facebook"
								className="work-image"
							/>
									Storm Technology
								</div>
								<div className="work-subtitle-container">
									<div className="work-subtitle">
										Graduate Software Engineer
									</div>

									<div className="work-duration">
										2019 - 2020
									</div>
								</div>
								<div className="work-subtitle-container">
									<div className="work-subtitle">
										Software Engineer
									</div>
									<div className="work-duration">
										2020 - 2022
									</div>
								</div>
								<div className="work-subtitle-container">
									<div className="work-subtitle">
										Software Contractor
									</div>
									<div className="work-duration">
										2022 - 2025
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			/>
	);
};

export default Works;
