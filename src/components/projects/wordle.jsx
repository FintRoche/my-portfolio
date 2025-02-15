import React, { useState } from "react";
import "./styles/wordle.css";
import axios from "axios";
const Wordle = () => {
	const api = axios.create({
		baseURL: process.env.REACT_APP_API_URL,
		headers: {
			"Content-Type": "application/json",
		},
	});

	const [guessArray, setGuess] = useState(["toner"]);
	const [feedBackArray, setFeedBack] = useState(["BBBBB"]);

	const handleSubmit = async () => {
		try {
			const response = await api.post("/wordle/guess", {
				feedBackArray,
				guessArray,
			});
			const newGuessArray = [...guessArray, response.data];
			const newFeedBackArray = [...feedBackArray, "BBBBB"];
			setGuess(newGuessArray);
			setFeedBack(newFeedBackArray);
		} catch (error) {
			console.error("There was an error submitting the board:", error);
		}
	};

	const handleClear = () => {
		setGuess(["toner"]);
		setFeedBack(["BBBBB"]);
	};

	const handleLetterClick = (i, row) => {
		if(row === feedBackArray.length - 1){
		let newFeedBackArray = [...feedBackArray];
		let x = newFeedBackArray[row].split("");
		if (x[i] === "B") {
			x[i] = "Y";
		} else if (x[i] === "Y") {
			x[i] = "G";
		} else {
			x[i] = "B";
		}
		let y = x.join("");
		newFeedBackArray[row ] = y;
		setFeedBack(newFeedBackArray);}
	};

	return (
		<div className="wordle-container">
			{guessArray.map((guess, row) => (
				<div className="wordle-row">
					{[...Array(5)].map((x, i) => (
						<div 
                        className="wordle-square"
                        id={"feedback-" + feedBackArray[row].charAt(i)}
								onClick={() => handleLetterClick(i, row)}> 
							{guess.charAt(i)}
						</div>
					))}
				</div>
			))}
			<div className="wordle-button-container">
				<button onClick={() => handleClear()} className="button wordle-button">
					Clear
				</button>
				<button
					onClick={() => handleSubmit()}
					className="button wordle-button"
				>
					Submit
				</button>
			</div>
		</div>
	);
};
export default Wordle;
