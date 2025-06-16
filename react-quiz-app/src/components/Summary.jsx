import { quizComplete } from "../assets";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaRegClock,
  FaRedo,
} from "react-icons/fa";

export default function Summary({ answers, onRestart, language }) {
  const total = answers.length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const skipped = answers.filter((a) => a.answer === null).length;
  const incorrect = total - correct - skipped;
  const percent = Math.round((correct / total) * 100);

  // 🔁 Dicționar pentru limbi
  const t = {
    de: {
      completed: "Quiz abgeschlossen",
      restart: "Neu starten",
      result: "Du hast",
      of: "von",
      correct: "Fragen richtig beantwortet",
      skipped: "Übersprungen",
      wrong: "Falsch",
      correctSingle: "Richtig",
      givenAnswer: "Gegebene Antwort",
      noAnswer: "Keine Antwort gegeben",
    },
    en: {
      completed: "Quiz completed",
      restart: "Restart",
      result: "You answered",
      of: "out of",
      correct: "questions correctly",
      skipped: "Skipped",
      wrong: "Incorrect",
      correctSingle: "Correct",
      givenAnswer: "Given answer",
      noAnswer: "No answer given",
    },
  };

  const dict = t[language] || t.de;

  const renderResultBadge = (isCorrect, answer) => {
    if (answer === null) {
      return (
        <span className="inline-flex items-center gap-1 text-yellow-600">
          <FaRegClock /> {dict.skipped}
        </span>
      );
    }

    return isCorrect ? (
      <span className="inline-flex items-center gap-1 text-green-600">
        <FaCheckCircle /> {dict.correctSingle}
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 text-red-600">
        <FaTimesCircle /> {dict.wrong}
      </span>
    );
  };

  const renderAnswerText = (answer) =>
    answer ?? (
      <span className="inline-flex items-center gap-1 text-yellow-600">
        <FaRegClock /> {dict.noAnswer}
      </span>
    );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      {/* 🔁 Buton Restart */}
      <button
        onClick={onRestart}
        className="primary-btn absolute top-4 right-4 text-sm flex items-center gap-1"
      >
        <FaRedo /> {dict.restart}
      </button>

      {/* 🏁 Imagine finală */}
      <img
        src={quizComplete}
        alt={dict.completed}
        className="w-32 mx-auto mb-4 drop-shadow"
      />

      {/* ✅ Titlu */}
      <h2 className="text-2xl font-bold text-center text-dark mb-2 flex justify-center items-center gap-2">
        {dict.completed}
      </h2>

      {/* 📊 Rezultat general */}
      <p className="text-center text-dark mb-4">
        {dict.result} <strong>{correct}</strong> {dict.of} {total}{" "}
        {dict.correct} (<strong>{percent}%</strong>)
      </p>

      {/* 📌 Statistici */}
      <ul className="text-sm mb-6 flex justify-center gap-6">
        <li className="flex items-center gap-2 text-green-600">
          <FaCheckCircle /> {dict.correctSingle}: {correct}
        </li>
        <li className="flex items-center gap-2 text-red-600">
          <FaTimesCircle /> {dict.wrong}: {incorrect}
        </li>
        <li className="flex items-center gap-2 text-yellow-600">
          <FaRegClock /> {dict.skipped}: {skipped}
        </li>
      </ul>

      {/* 🧠 Listă întrebări + răspunsuri */}
      <div className="space-y-4">
        {answers.map(({ question, answer, isCorrect }, index) => (
          <div
            key={question.id}
            className={`border-l-4 p-3 rounded ${
              answer === null
                ? "border-gray-400 bg-gray-100"
                : isCorrect
                ? "border-green-500 bg-green-50"
                : "border-red-500 bg-red-50"
            }`}
          >
            <p className="text-sm mb-1">
              {renderResultBadge(isCorrect, answer)}
            </p>

            <p className="font-medium text-dark mb-1">
              {index + 1}. {question.text}
            </p>

            <p className="text-sm text-dark2">
              {dict.givenAnswer}:{" "}
              <span className="font-semibold">{renderAnswerText(answer)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
