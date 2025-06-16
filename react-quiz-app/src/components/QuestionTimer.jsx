import { useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [timeLeft, setTimeLeft] = useState(timeout);

  // 🔁 Scade timpul la fiecare 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // 🚨 Dacă timpul s-a scurs, se apelează onTimeout
  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
    }
  }, [timeLeft, onTimeout]);

  // 📊 Progresul în procente pentru bara de timp
  const progress = (timeLeft / timeout) * 100;

  // 🎨 Culoarea barei în funcție de dificultate
  const barColor =
    {
      easy: "bg-green-500",
      medium: "bg-yellow-500",
      hard: "bg-red-500",
    }[mode] || "bg-green-500";

  // ⏱️ Formatul timpului (00:MM:SS)
  const formatTime = (ms) => {
    const totalSeconds = Math.ceil(ms / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `00:${minutes}:${seconds}`;
  };

  return (
    <div className="mb-4">
      {/* Afișare text cu ceas */}
      <div className="flex items-center justify-end text-sm font-mono text-white mb-1 gap-1">
        <FiClock className="text-white animate-pulse" />
        <span>{formatTime(timeLeft)}</span>
      </div>

      {/* Bara de progres */}
      <div className="h-2 w-full rounded overflow-hidden border border-gray-400/50 shadow-sm bg-white/30 backdrop-blur">
        <div
          className={`h-full ${barColor} transition-all duration-100`}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
