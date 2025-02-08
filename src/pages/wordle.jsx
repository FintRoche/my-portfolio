import React, { useState } from "react";
import axios from "axios";

const Wordle = () => {
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState("");
  const [bestGuess, setBestGuess] = useState("");
  const [possibleWords, setPossibleWords] = useState([]);

  const handleGuessSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5018/api/wordle/guess", {
        guess,
        feedback
      });

      if (response.status === 200) {
        setBestGuess(response.data);
      }
    } catch (error) {
      console.error("Error fetching best guess:", error);
    }
  };

  const handleFilterSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5018/api/wordle/filter", {
        guess,
        feedback
      });

      if (response.status === 200) {
        setPossibleWords(response.data);
      }
    } catch (error) {
      console.error("Error filtering words:", error);
    }
  };

  return (
    <div>
      <h1>Wordle Helper</h1>
      <div>
        <label>Guess: </label>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          maxLength={5}
        />
      </div>
      <div>
        <label>Feedback: </label>
        <input
          type="text"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          maxLength={5}
        />
      </div>
      <button onClick={handleGuessSubmit}>Get Best Guess</button>
      <button onClick={handleFilterSubmit}>Filter Possible Words</button>

      {bestGuess && (
        <div>
          <h2>Best Guess: {bestGuess}</h2>
        </div>
      )}

      {possibleWords.length > 0 && (
        <div>
          <h2>Possible Words:</h2>
          <ul>
            {possibleWords.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Wordle;