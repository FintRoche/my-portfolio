import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import Carousel from "../components/about/carousel";

import INFO from "../data/user";
import "./styles/about.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="about-container">
						<div className="about-section">
							<div className="title about-title">
								{INFO.about.title1}
							</div>
							<div className="about-main">
								<div className="image-box about-right">
									<img
										src={INFO.about.image1}
										alt="about"
										className="about-image"
									/>
								</div>
								<div className="about-right-side">
									<div className="subtitle about-subtitle">
										{INFO.about.description1}
									</div>
								</div>
							</div>
						</div>
						<div className="about-section">
							<div className="title about-title">
								{INFO.about.title2}
							</div>
							<div className="about-main">
								<div className="about-right-side">
									<div className="subtitle about-subtitle">
										{INFO.about.description2}
									</div>
								</div>
								<div className="about-image-long">
									<img
										src={INFO.about.image2}
										alt="about"
										className="about-image"
									/>
								</div>
							</div>
						</div>
						<div className="about-section">
							<div className="title about-title">
								{INFO.about.title3}
							</div>
							<div className="about-main">
								<div className="about-right-side">
									<div className="subtitle about-subtitle">
										{INFO.about.description3}
									</div>
								</div>
								{/* <div className="w-full max-w-2xl mx-auto p-4">
									<Slider {...settings}>
										{INFO.about.images3.map((src, index) => (
											<div key={index}>
												<img
													src={src}
													alt={`Slide ${index + 1}`}
													// className="w-full h-64 object-cover rounded-lg"
													className="about-slider-image"
												/>
											</div>
										))}
									</Slider>
								</div> */}
								<div style={{ height: "500px" }}>
									<Carousel images={INFO.about.images3} />
								</div>
							</div>
						</div>
						<div className="about-section">
							<div className="title about-title">
								{INFO.about.title4}
							</div>
							<div className="about-main">
								<div className="about-right-side">
									<div className="subtitle about-subtitle">
										{INFO.about.description4}
									</div>
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;
