import React from "react";
import Sudoku from "../components/suduko/suduko";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";


function project_1() {
	return {
		icon: {faTableCells},
		title: "Soduko Solver",
		description: "This is a sudoko solver algoritim I developed in college in Java and have now recently refined and made in c#",
		component: (
			<Sudoku></Sudoku>
		)
	};
}


const myProjects = [project_1];

export default myProjects;
