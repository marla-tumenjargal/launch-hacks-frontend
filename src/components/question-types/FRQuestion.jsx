import { useEffect, useState } from "react";
import FRQuestionContainer from "./FRQuestionContainer";
import { Connector } from "../Map-Utilities/Connector";
import "../styles/FRQuestion.css";

export default function FRQuestion(props) {
  const [value, setValue] = useState(""); //user input
  const [questionArray, setQuestionArray] = useState(props.questions);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [hasEnded, setHasEnded] = useState();

  useEffect(() => {
    for (let i = 0; i < questionArray.length; i++) {
      console.log(questionArray[i].answer);
    }

    for (let i = 0; i < questionArray.length; i++) {
      if (value == questionArray[i].answer && !questionArray[i].solved) {
        setCorrectAnswers(correctAnswers + 1);
        setValue("");
        const updatedItem = {
          question: questionArray[i].question,
          answer: questionArray[i].answer,
          solved: true,
        };
        const newArray = [...questionArray];
        newArray[i] = updatedItem;
        setQuestionArray(newArray);
      }
    }

    if (correctAnswers == questionArray.length) {
      endGame();
    }
  });

  function endGame() {
    setHasEnded(true);
  }

  /**
   * This method resets the entire page with new questions.
   * It calls the server x amount of times (can be changed via NUMBER_OF_QUESTIONS variable) and then sets the question array to hold the new questions.
   */
  const nextHandler = async () => {
    let questionHolder = [];
    let connector = new Connector();
    const NUMBER_OF_QUESTIONS = 3;

    const response = connector.getNewQuestions(NUMBER_OF_QUESTIONS);
    const data = await response;

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].correct);
      const question = {
        question: data[i].question,
        answer: data[i].correct,
        solved: false,
      };
      questionHolder.push(question);
    }

    setValue("");
    setQuestionArray(questionHolder);
    setCorrectAnswers(0);
    setHasEnded(false);
  };

  return (
    <div className="frq">
      <div>
        {!hasEnded && (
          <div className="frq-top-container">
            <div className="frq-input-container">
              <input className="frq-input" onChange={(e) => setValue(e.target.value)} value={value} />
              <div>
                {correctAnswers}/{questionArray.length} Answered
              </div>
            </div>
            <button className="frq-giveup-button" onClick={endGame}>Give Up?</button>
          </div>
        )}
        {hasEnded && (
          <div className="frq-top-container">
            You got {correctAnswers} / {questionArray.length} correct
            <button onClick={nextHandler} className="frq-next-button">Next</button>
          </div>
        )}
      </div>
      {questionArray.map((data) => {
        return (
          <div>
            <FRQuestionContainer
              question={data.question}
              answer={data.answer}
              solved={data.solved}
              ended={hasEnded}
            ></FRQuestionContainer>
          </div>
        );
      })}
    </div>
  );
}
