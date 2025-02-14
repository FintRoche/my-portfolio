import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {
	return (
			<Card
				icon={faBook}
				title="Education"
				body={
					<div className="works-body">
						<div className="work">
							
							<div className="work-details">
							
								<div className="work-title">
								<img
								src="./nuig_logo.png"
								alt="facebook"
								className="work-image"
							/>
									National University of Galway
									
								</div>
								<div className="work-subtitle-container">
									<div className="work-subtitle">
										BS Physics and Applied Physics
									</div>
								</div>
							</div>


							<div className="work-details">
							
								<div className="work-title">
								<img
								src="./nuig_logo.png"
								alt="facebook"
								className="work-image"
							/>
									National University of Galway
									
								</div>
								<div className="work-subtitle-container">
									<div className="work-subtitle">
										Postgraduate Diploma Software Design and Development
									</div>
								</div>
							</div>
						</div>
					</div>
				}
			/>
	);
};

export default Education;
