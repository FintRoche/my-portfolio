import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import "./styles/readArticle.css";
import myProjects from "../data/projects";

const Project = () => {
	let { slug } = useParams();

	const article = myProjects[slug - 1];

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [article]);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`${article().title} | ${INFO.main.title}`}</title>
				<meta name="description" content={article().description} />
			</Helmet>

			<div className="page-content">
				<NavBar active="projects"/>
				<div className="content-wrapper">
					<div className="read-article-logo-container">
						<div className="read-article-logo">
							<Logo logo="../back-button.png" linktext="/projects" width={46} />
						</div>
					</div>
					<div className="read-article-container">
					
							<div className="title">
								{article().title}
							</div>
							<br/>
							<div className="project-body">
							{article().component}</div>
							</div>
						</div>
					
					<div className="page-footer">
						<Footer />
					</div></div>
		</React.Fragment>
	);
};

export default Project;
