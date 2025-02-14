import React, { useEffect } from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Card from "../components/common/card";
import "./styles/projects.css";
import myProjects from "../data/projects";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";


const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">Projects.</div>

						<div className="project-cards">
							{myProjects.map((project, index) => (
								<Card
									icon={faTableCells}
									title={project().title}
									body={project().description}
									link={"/projects/" + index + 1}
									linkTilte="open..."
								></Card>
							))}
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
