import { useState } from "react";
import "../css/FRQuestionContainer.css";

export default function FRQuestionContainer(props) {


  return (
    <div className="frq-container">
      <div className="frq-container-component">{props.question}</div>
      <div className="frq-container-component ">
      {(props.solved || props.ended) && <div className={props.ended && props.solved ? "frq-correct" : (!props.solved ? "frq-incorrect" : "")}>{props.answer}</div>}
      </div>
    </div>
  );
}
