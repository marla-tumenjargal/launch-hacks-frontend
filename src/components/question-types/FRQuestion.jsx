import { useEffect, useState } from "react";
import FRQuestionContainer from "./FRQuestionContainer";

export default function FRQuestion(props) {
  const [value, setValue] = useState("");
  const [questionArray, setQuestionArray] = useState(props.questions);

  useEffect(() => {
    for (let i = 0; i < questionArray.length; i++) {
        if(value == questionArray[i].answer) {
            setValue("");
            const updatedItem = {
                question: questionArray[i].question,
                answer: questionArray[i].answer,
                solved: true
            }
            const newArray = [...questionArray];
            newArray[i] = updatedItem;
            setQuestionArray(newArray);
        }
    }
  });
  return (
    <>
      <input onChange={(e) => setValue(e.target.value)} value={value}/>
      {questionArray.map((data) => {
        return (
          <div>
            <FRQuestionContainer
              question={data.question}
              answer={data.answer}
              solved={data.solved}
            ></FRQuestionContainer>
          </div>
        );
      })}
    </>
  );
}
