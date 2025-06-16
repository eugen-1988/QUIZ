import { useState, useEffect, useRef } from "react";

export default function Answers({ answers, onSelect, language }) {
  const [shuffled, setShuffled] = useState([]);
  const [selected, setSelected] = useState(null);
  const originalShuffled = useRef(false);

  useEffect(() => {
    if (!originalShuffled.current) {
      const mixed = [...answers].sort(() => Math.random() - 0.5);
      setShuffled(mixed);
      originalShuffled.current = true;
    }
  }, [answers]);

  const handleClick = (answer) => {
    if (selected !== null) return;
    setSelected(answer);
    onSelect(answer);
  };

  const getButtonClass = (answer) => {
    const correctAnswer = answers[0];

    if (!selected) return "primary-btn w-full mb-3";

    if (answer === selected) {
      // ✅ Răspuns ales de utilizator
      return answer === correctAnswer
        ? "bg-green-500 text-white w-full mb-3 py-2 px-4 rounded-lg ring-4 ring-green-300 ring-offset-2"
        : "bg-red-500 text-white w-full mb-3 py-2 px-4 rounded-lg ring-4 ring-red-300 ring-offset-2";
    }

    if (answer === correctAnswer) {
      // ✅ Afișăm răspunsul corect chiar dacă nu a fost ales
      return "bg-green-500/80 text-white w-full mb-3 py-2 px-4 rounded-lg";
    }

    // ❌ Alte răspunsuri incorecte neselectate
    return "bg-gray-200 text-dark w-full mb-3 py-2 px-4 rounded-lg";
  };

  return (
    <div className="flex flex-col">
      {shuffled.map((answer) => (
        <button
          key={answer}
          className={getButtonClass(answer)}
          onClick={() => handleClick(answer)}
        >
          {answer}
        </button>
      ))}
    </div>
  );
}
