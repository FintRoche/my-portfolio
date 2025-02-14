import React, { useState } from "react";
import "./styles/suduko.css";
import axios from "axios";
const Sudoku = () => {
	const api = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		headers: {
			"Content-Type": "application/json",
		},
	});

	const initialBoard = Array(9).fill(Array(9).fill(""));
	const [board, setBoard] = useState(initialBoard);

	const handleSubmit = async () => {
		try {
			const response = await api.post("/sudoko/projects", { board });
			setBoard(response.data);
		} catch (error) {
			console.error("There was an error submitting the board:", error);
		}
	};

	const handleChange = (event, x, y) => {
		const newValue = event.target.value;
		const updatedBoard = board.map((row) => [...row]);
		updatedBoard[y][x] = newValue;

		setBoard(updatedBoard);
	};

	const handleClear = () => {
		const initialBoard = Array(9).fill(Array(9).fill(""));
		setBoard(initialBoard);
	};

	return (
		<div className="sudoku-board">
			<div class="container">
				<table id="grid" cellspacing="0">
					{board.map((row, y) => (
						<tr>
							{row.map((cell, x) => (
								<td>
									<input
										id={"cell-" + x + "" + y}
										type="text"
										value={cell}
										onChange={(e) => handleChange(e, x, y)}
									/>
								</td>
							))}
						</tr>
					))}
				</table>
			</div>
      <div className="sudoku-button-container">
			<button onClick={handleClear} className="button sudoku-button">
				Clear
			</button>
			<button onClick={handleSubmit} className="button sudoku-button">
				Submit Board
			</button>
      </div>
		</div>
	);
};
export default Sudoku;
