import { useEffect, useState } from "react";
import FRQuestionContainer from "./FRQuestionContainer";
import { Connector } from "../Map-Utilities/Connector";

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

  const nextHandler = async () => {
    let questionHolder = [];
    let connector = new Connector();

    for (let i = 0; i < 3; i++) {
      const response = connector.getMapQuestion();
      const data = await response;
      const question = { question: data.question, answer: data.correct, solved: false };
      questionHolder.push(question);
    }

    setValue("");
    setQuestionArray(questionHolder);
    setCorrectAnswers(0);
    setHasEnded(false);
  }

  return (
    <>
      <div>
        {!hasEnded && (
          <div>
            <input onChange={(e) => setValue(e.target.value)} value={value} />
            <div>
              {correctAnswers}/{questionArray.length}
            </div>
            <button onClick={endGame}>Give Up?</button>
          </div>
        )}
        {hasEnded && (
          <div>
            You got {correctAnswers} / {questionArray.length}
            <button onClick={nextHandler}>
              Next
            </button>
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
    </>
  );
}
