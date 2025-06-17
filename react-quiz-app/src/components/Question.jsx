import Answers from "./Answers";
import QuestionTimer from "./QuestionTimer";

export default function Question({
  question,
  onSelect,
  onTimeout,
  timeout,
  mode,
  language,
}) {
  return (
    <div>
      <QuestionTimer timeout={timeout} onTimeout={onTimeout} mode={mode} />
      <h2 className="text-xl font-semibold text-white font-poppins mb-4 text-center">
        {question.text}
      </h2>
      <Answers answers={question.answers} onSelect={onSelect} />
    </div>
  );
}
