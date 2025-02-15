import React from "react";
import Sudoku from "../components/projects/suduko";
import Wordle from "../components/projects/wordle";
import { faTableCells, faW } from "@fortawesome/free-solid-svg-icons";

function project_1() {
	return {
		icon: { faTableCells },
		title: "Soduko Solver",
		description:
			"This is a sudoko solver algoritim I developed in college in Java and have now recently refined and made in c#",
		component: <Sudoku></Sudoku>,
	};
}

function project_2() {
	return {
		icon: { faW },
		title: "Wordle Solver",
		description: "Coming Soon",
		component: <Wordle></Wordle>,
	};
}

const myProjects = [project_1, project_2];

export default myProjects;
