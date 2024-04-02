export default function FRQuestionContainer(props) {
  return (
    <div>
      <div>{props.question}</div>
      {props.solved && <div>{props.answer}</div>}
    </div>
  );
}
