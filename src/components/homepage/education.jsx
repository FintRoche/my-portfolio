import React from "react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Education = () => {
	return (
		// <div className="works">
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
									{/* <div className="work-duration">
										2019 - 2020
									</div> */}
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
									{/* <div className="work-duration">
										2019 - 2020
									</div> */}
								</div>
							</div>
						</div>

						{/* <div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
					</div>
				}
			/>
		// </div>
	);
};

export default Education;
