import { useEffect, useState } from "react";
import "../css/MCQuestion.css";
export default function MCQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [hidden, setHidden] = useState("hidden");
  const [isCorrect, setIsCorrect] = useState("");
  const [question, setQuestion] = useState();
  useEffect(() => {
    async function getMCQuestion() {
      const response = await fetch("http://localhost:8080/v1/trivia/mcq/hi");
      const data = await response.json();
      setQuestion(data);
    }
    getMCQuestion();
  }, []);
  useEffect(() => {
    if (!question) {
      return;
    }
    if (selectedAnswer == question.correct) {
      setIsCorrect("Correct!");
    } else if (selectedAnswer == "") {
      return;
    } else {
      setIsCorrect("Incorrect");
    }
  }, [selectedAnswer]);

  function changeAnswer(answer) {
    if (selectedAnswer == "") {
      setSelectedAnswer(answer);
      setHidden("");
    }
    return;
  }

  return (
    <>
      {question && (
        <div className="mcq">
          <h2>{question.question}</h2>
          <div className="mcq-answer-container">
            {question.answer.map((data) => {
              let correct = data == question.correct ? "correct" : "incorrect";
              return (
                <div
                  key={data}
                  onClick={() => changeAnswer(data)}
                  className={"mcq-answer-option " + correct + " " + hidden}
                >
                  {data}
                </div>
              );
            })}
          </div>
          <div>{isCorrect}</div>
          <button
            className="mcq-submit"
            onClick={() => window.location.reload()}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
