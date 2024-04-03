import React, { useEffect, useState } from "react";
import "../css/MCQuestion.css";

export default function MCQuestion({ question, answer, answers, handleClosePopup }) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState("");

  const changeAnswer = (selected) => {
    if (selectedAnswer === "") {
      setSelectedAnswer(selected);
      setIsCorrect(selected === answer ? "Correct!" : "Incorrect");
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer("");
    setIsCorrect("");
    handleClosePopup();
  };

  const answerIcons = ["\u0041", "\u0042", "\u0043", "\u0044"];

  return (
    <div className="popup">
      <div className="popup-content">
        <h2 className="popup-question subtitle">{question}</h2>
        <ul className="popup-answers description">
          {answers.map((data, index) => (
            <li key={index} onClick={() => changeAnswer(data)}>
              {answerIcons[index]} {data}
            </li>
          ))}
        </ul>
        <div>{isCorrect}</div>
        <button className="styled-button-one popup-next" onClick={handleNextQuestion}>
          Next
        </button>
      </div>
    </div>
  );
}
