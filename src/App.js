import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Project from "./pages/project";
import Wordle from "./pages/wordle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";
import "./app.css";

function App() {

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/projects/:slug" element={<Project />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/wordle" element={<Wordle />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
