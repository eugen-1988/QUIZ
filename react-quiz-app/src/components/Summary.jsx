import { quizComplete } from "../assets";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaRegClock,
  FaRedo,
} from "react-icons/fa";

export default function Summary({ answers, onRestart }) {
  const total = answers.length;
  const correct = answers.filter((a) => a.isCorrect).length;
  const skipped = answers.filter((a) => a.answer === null).length;
  const incorrect = total - correct - skipped;
  const percent = Math.round((correct / total) * 100);

  const renderResultBadge = (isCorrect, answer) => {
    if (answer === null) {
      return (
        <span className="inline-flex items-center gap-1 text-yellow-600">
          <FaRegClock /> übersprungen
        </span>
      );
    }

    return isCorrect ? (
      <span className="inline-flex items-center gap-1 text-green-600">
        <FaCheckCircle /> richtig
      </span>
    ) : (
      <span className="inline-flex items-center gap-1 text-red-600">
        <FaTimesCircle /> falsch
      </span>
    );
  };

  const renderAnswerText = (answer) =>
    answer ?? (
      <span className="inline-flex items-center gap-1 text-yellow-600">
        <FaRegClock /> Keine Antwort gegeben
      </span>
    );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative">
      {/* 🔁 Buton Restart */}
      <button
        onClick={onRestart}
        className="primary-btn absolute top-4 right-4 text-sm flex items-center gap-1"
      >
        <FaRedo /> Neu starten
      </button>

      {/* 🏁 Imagine finală */}
      <img
        src={quizComplete}
        alt="Quiz abgeschlossen"
        className="w-32 mx-auto mb-4 drop-shadow"
      />

      {/* ✅ Titlu */}
      <h2 className="text-2xl font-bold text-center text-dark mb-2 flex justify-center items-center gap-2">
        Quiz abgeschlossen
      </h2>

      {/* 📊 Rezultat general */}
      <p className="text-center text-dark mb-4">
        Du hast <strong>{correct}</strong> von {total} Fragen richtig
        beantwortet (<strong>{percent}%</strong>)
      </p>

      {/* 📌 Statistici */}
      <ul className="text-sm mb-6 flex justify-center gap-6">
        <li className="flex items-center gap-2 text-green-600">
          <FaCheckCircle /> Richtig: {correct}
        </li>
        <li className="flex items-center gap-2 text-red-600">
          <FaTimesCircle /> Falsch: {incorrect}
        </li>
        <li className="flex items-center gap-2 text-yellow-600">
          <FaRegClock /> Übersprungen: {skipped}
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
            {/* 🟢 Eticheta (richtig/falsch/übersprungen) MUTATĂ SUS */}
            <p className="text-sm mb-1">
              {renderResultBadge(isCorrect, answer)}
            </p>

            {/* Întrebarea */}
            <p className="font-medium text-dark mb-1">
              {index + 1}. {question.text}
            </p>

            {/* Răspunsul dat */}
            <p className="text-sm text-dark2">
              Gegebene Antwort:{" "}
              <span className="font-semibold">{renderAnswerText(answer)}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
