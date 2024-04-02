import { useEffect, useState } from "react";
import FRQuestionContainer from "./FRQuestionContainer";

export default function FRQuestion(props) {
  const [value, setValue] = useState("");
  const [questionArray, setQuestionArray] = useState(props.questions);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [hasEnded, setHasEnded] = useState();
  useEffect(() => {
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

    if (correctAnswers >= questionArray.length) {
      endGame();
    }
  });

  function endGame() {
    setHasEnded(true);
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
            <button>
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
