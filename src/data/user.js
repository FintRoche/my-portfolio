const INFO = {
	main: {
		title: "Reactfolio by Fintan Roche",
		name: "Fintan Roche",
		email: "fintan.roche95@gmail.com",
		logo: "../my-logo.jpg",
	},

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/fintanroche/",
		instagram: "https://instagram.com/",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
	},

	homepage: {
		title: "Full-stack web developer.",
		description:
			"Full stack software developer with 5 years of experience specializing in Microsoft technologies. Adept at building secure, scalable, and efficient full-stack solutions using frame works such as Angular, ASP.Net framework and Entity Framework. Along side with Azure, Azure DevOps, Azure Resource Manager (ARM) and CI/CD pipelines to insure seamless deployment. Proficient in many programming languages including JavaScript, C#, SQL and TypeScript, Experience delivering high-quality applications in industries such as Finance, Healthcare, and Medtech.",
	},

	about: {
		title1: "From Physics to Software Development.",
		description1:
			`My journey into software development began with a deep curiosity about
		how the world works. While studying
		Physics, I honed my ability to break
			down complex problems into
			manageable solutions—an essential
			skill that naturally led me to
			programming. What started as a few
			lines of code to solve physics
			simulations quickly evolved into a
			passion for building scalable,
			efficient, and impactful software
			solutions. To formalize my
			transition into the tech industry, I
			went on to complete a postgraduate
			degree in Software Development,
			where I deepened my understanding of
			programming, algorithms, and system
			architecture. This combination of
			analytical thinking from physics and
			structured problem-solving from
			software development has shaped my
			approach to writing clean,
			efficient, and maintainable code.
			
			One of the most valuable lessons I
			took from physics was the ability to
			think critically and solve problems
			creatively. In software development,
			this mindset has been
			invaluable—whether it’s optimizing
			performance, debugging intricate
			systems, or architecting robust
			applications. I thrive in tackling
			challenges, breaking them down
			logically, and delivering efficient
			solutions.`,
		image1:"quad.jpg",
		title2:"Life in British Columbia.",
		description2:`Originally from Ireland, I moved to
					British Columbia three years ago, drawn
					by both career opportunities and my love
					for the outdoors. I currently live in
					Squamish, where I get to balance my work
					in tech with an adventurous lifestyle in
					the mountains.`,
		image2:"squamish.jpg",
		title3:"Beyond the Screen: My Hobbies",
		description3:`When I’m not writing code, you’ll likely
										find me out on the trails or in the
										backcountry. I’m an avid mountain biker
										and ski tourer, always looking for new
										terrain to explore. The mountains
										provide the perfect contrast to
										coding—offering both mental clarity and
										a physical challenge that keeps me
										motivated.`,
		images3:[
			"touring1.jpg",
			"biking1.jpg",
			"touring3.jpg",
			"skiing.jpg",
			"surfing.jpg",
			"touring2.jpg",
		],
		title4:"Let’s Connect!",
		description4:`Whether you want to discuss software, outdoor adventures, or anything in between, feel free to reach out. I’m always happy to chat, collaborate, and explore new ideas!`

	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	projects: [
		{
			title: "Broadridge Financial Solutions (Contract)",
			description:
				"Joined an experienced team to aid in the development of the PayMe process for representatives of 60+ clients.",
			logo: "broadridge_logo.jpg",
			tasks: {
				__html: `<ul>
				<li>Design and development of responsive and visually appealing user interfaces using modern frontend
					technologies HTML, CSS, typeScript.
				</li>
				<li>Development and integration of code into Broadridges internal engine to convert yaml code into Angular
					components, serving as the foundational template for the solution.
				</li>
				<li>Development of WebApi backends to provide data and domain specific services to client applications
					suitable for both mobile, web and third party.
				</li>
				<li>Implementation of unit, integration, and end-to-end tests to ensure comprehensive test coverage,
					improve code quality, and validate the functionality of the solution.
				</li>
				<li>Design and implemention scalable MongoDB databases for high-traffic applications, optimizing data
					retrieval and storage through efficient schema design, indexing, and query optimization techniques.
				</li>
				<li>Effective management of Git repositories to ensure deployment of code to the appropriate client
					environments.
				</li>
				<li>Development while upholding SOLID principles and responsive web design best practices.
				</li>
				<li>Collaboration with the QA team to ensure delivery of a high-quality application for end-users which
					followed the clients requirements.
				</li>
			</ul>`,
			},
		},

		{
			title: "Tusla – Case Management (Contract)",
			description:
				"Joined an experienced team to aid in the development of the management and localization of Tusla Child and Family Agency Case’s.",
			logo: "tusla-logo.png",
			tasks: {
				__html: `<ul>
				<li>Design and development of responsive and visually appealing user interfaces using modern frontend
					technologies HTML, CSS, typeScript.
				</li>	
				<li>Development of reusable code and components to streamline development processes, enhance efficiency,
					and reduce complexity.
				</li>	
				<li>Development of WebApi backends to provide data and domain specific services to client applications
					suitable for both mobile, web and third party.
				</li>	
				<li>Refactored legacy code to enhance scalability and improve readability, ensuring a more maintainable
					and efficient codebase for future development.
				</li>	
				<li>Secure Development of .NET and Angular Code with Data Protection as a Priority.
				</li>	
				<li>Development while upholding SOLID principles and responsive web design best practices.
				</li>	
				<li>Work with Swagger and Swashbuckle to automatically generate API documentation.
				</li>
			</ul>`,
			},
		},

		{
			title: "SteriPack - Quality Management Solution",
			description:
				"Joined a very experienced development team in Storm to work on a global Quality Management Solution QMS Enterprise System for priority client operating in the highly regulated medtech sector.",
			logo: "steripack_logo.svg",
			tasks: {
				__html: `<ul>
				<li>Development on solution across the full stack using Angular / .Net Core / Azure SQL Server.
				</li>	
				<li>Design and development of responsive and visually appealing user interfaces using modern frontend
technologies HTML, CSS, typeScript.
				</li>	
				<li>Development of reusable code and components to streamline development processes, enhance efficiency,
and reduce complexity.
				</li>	
				<li>Developed WebApi backends to provide data and domain specific services to client applications suitable
for both mobile, web and third party.
				</li>	
				<li>Development using strict SOLID principles and responsive web design best practices.
				</li>	
				<li>Contribution to requirements gathering, refinement and proof of concepts using Figma.
				</li>	
				<li>Setup of new environments within Azure manually using the Azure portal and automatically with
PowerShell ISE.
				</li>	
				<li>Implementation of Azure Pipelines for CI/CD for apps into Azure PaaS.
				</li>	
				<li>Implemention of Audit History for Fully Auditable entities.
				</li>
			</ul>`,
			},
		},

		{
			title: "An Post – Ideas Matter (Independent Development)",
			description:
				"Managed and devoloped a project for a Storm client to organise, manage and implement internal issues and recommendations from staff.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			tasks: {
				__html: `<ul>
				<li>Facilitation of meetings with the client to gather comprehensive project requirements.
				</li>	
				<li>Design and development of user-friendly UX utilizing Canvas Apps.
				</li>	
				<li>Development of application in PowerApps using Common Data Service CDS, Flow, Forms and
SharePoint online.
				</li>	
				<li>Creation of a comprehensive project plan.
				</li>	
				<li>Development of task-specific time estimates.
				</li>	
				<li>Integrated data extraction and analysis results into Power BI dashboards for easy visualization and
reporting.
				</li>	
				<li>Creation of a SharePoint site to efficiently manage project data, enhancing overall data organization and
accessibility.
				</li>	
				<li>Development of Microsoft Flow (Power Automate) to provide auto-approval and status update features
based on predefined criteria.
				</li>
			</ul>`,
			},
		},

		{
			title: "Dublin Bus– Sentiment Analysis (Independent Development)",
			description:
				"Solely developed a sentiment analysis solution for Dublin Bus to track and analyze customer feedback from their Yammer page.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			tasks: {
				__html: `<ul>
				<li>FCollaborated directly with the client to gather requirements and define project scope, ensuring
alignment with business needs.
				</li>	
				<li>Utilized REST APIs and Power Automate to extract real-time data from Dublin Bus’s Yammer
platform, processing customer comments and posts.
				</li>	
				<li>Utilized Power Automate to run sentiment analysis to classify feedback into positive, negative, and
neutral categories, enabling better understanding of customer sentiment.
				</li>	
				<li>Integrated data extraction and analysis results into Power BI dashboards for easy visualization and
reporting, allowing management to make data-driven decisions based on customer sentiment trends.
				</li>	
				<li>Automated the workflow to ensure seamless data extraction, processing, and reporting, reducing manual
effort and improving operational efficiency.
				</li>
			</ul>`,
			},
		},
	],
	techonolgies: [
		// {
		// 	id: 1,
		// 	title: ".NET / .NET Core",
		// 	icon: "net.png",
		// },
		{
			id: 2,
			title: "Angular",
			icon: "angular.png",
		},
		{
			id: 3,
			title: "C#",
			icon: "c.png",
		},
		{
			id: 4,
			title: "SQL Server/Azure SQL – TSQL",
			icon: "sql.png",
		},
		{
			id: 5,
			title: "Build Automation",
			icon: "build_automation.png",
		},
		{
			id: 6,
			title: "Azure Functions",
			icon: "azure.png",
		},
		{
			id: 7,
			title: "Typescript",
			icon: "typescript.png",
		},
		{
			id: 8,
			title: "Figma",
			icon: "figma.png",
		},
		{
			id: 9,
			title: "Power Apps / Flows",
			icon: "powerapps.png",
		},
		{
			id: 10,
			title: "Azure",
			icon: "azure.png",
		},
		{
			id: 11,
			title: "Entity Framework",
			icon: "entity_framework.png",
		},
		{
			id: 12,
			title: "Unit Testing",
			icon: "testing.png",
		},
		{
			id: 13,
			title: "Azure DevOps",
			icon: "devops.png",
		},
		{
			id: 14,
			title: "Sharepoint",
			icon: "sharepoint.png",
		},
		{
			id: 15,
			title: "JavaScript",
			icon: "js.png",
		},
		{
			id: 16,
			title: "HTML",
			icon: "html.png",
		},
		{
			id: 17,
			title: "CSS",
			icon: "css.png",
		},
		{
			id: 18,
			title: "Blazor",
			icon: "blazor.png",
		},
		{
			id: 19,
			title: "Rest API",
			icon: "rest.png",
		},
		{
			id: 20,
			title: "CI/CD pipelines",
			icon: "cicd.png",
		},
	],
};

export default INFO;
