import { useEffect, useState } from "react";
import "../css/MCQuestion.css"

export default function MCQuestion(props) {
    function changeAnswer(answer) {
        if(selectedAnswer == "") {
            setSelectedAnswer(answer);
            setHidden("");
        }
        return;
    }
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [hidden, setHidden] = useState("hidden");
    const [isCorrect, setIsCorrect] = useState("");
    
    useEffect(() => {
        if(selectedAnswer == props.answer) {
            console.log("hehehaha")
            setIsCorrect("Correct!")
        }
        else if (selectedAnswer == "") {
            return;
        }
        else{
            console.log(":(")
            setIsCorrect("Incorrect")

        }
    }, [selectedAnswer])
  return (
    <div className="mcq">
      <h2>{props.question}</h2>
      <div className="mcq-answer-container">
        {props.answers.map((data) => {
            let correct = data == props.answer ? "correct" : "incorrect";
          return (
            <div key={data} onClick={() => changeAnswer(data)} className={"mcq-answer-option " + correct + " " + hidden}>
                {data}
            </div>
          );
        })}
      </div>
      <div>
        {isCorrect}
      </div>
      <button>
        Next
      </button>
    </div>
  );
}
