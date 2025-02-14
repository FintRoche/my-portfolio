import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link, linktext,logo } = props;

	if (link === undefined) {
		link = true;
	}
	const imageElement = (
		<img src={logo ?? INFO.main.logo} alt="logo" className="logo" width={width} />
	);

	const linkText = ( linktext ?? "/")

	return (
		<React.Fragment>
			<Link to={linkText}>{imageElement}</Link>
		</React.Fragment>
	);
};

export default Logo;
