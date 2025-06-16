import { useState } from "react";
import Header from "./components/Header";
import { bg_main, bg_container } from "./assets";
import Quiz from "./components/Quiz";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [mode, setMode] = useState(null);
  const [timeout, setTimeoutValue] = useState(0);
  const [questionCount, setQuestionCount] = useState(null);

  // Returnează durata corespunzătoare pentru fiecare mod
  const getTimeoutValue = (selectedMode) => {
    if (selectedMode === "easy") return 30000;
    if (selectedMode === "medium") return 15000;
    if (selectedMode === "hard") return 10000;
    return 0;
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    setTimeoutValue(getTimeoutValue(selectedMode));
  };

  const handleQuestionCountSelect = (count) => {
    setQuestionCount(count);
  };

  const handleStartQuiz = () => {
    if (!mode || !questionCount) {
      toast.error("Bitte wähle Modus und Anzahl der Fragen aus.", {
        position: "top-center",
        autoClose: 3000,
        style: {
          minWidth: "500px",
          textAlign: "center",
          fontSize: "16px",
          fontWeight: "bold",
        },
      });
      return;
    }
    setQuizStarted(true);
  };

  const handleRestart = () => {
    setQuizStarted(false);
    setMode(null);
    setTimeoutValue(0);
    setQuestionCount(null);
  };

  // 👉 Generează buton pentru modurile Easy/Medium/Hard
  const renderModeButton = (label, value, color) => (
    <button
      onClick={() => handleModeSelect(value)}
      className={`w-32 px-4 py-2 rounded-lg font-semibold shadow transition flex items-center justify-center gap-1
        ${
          mode === value
            ? `bg-${color}-600 text-white scale-105 ring-4 ring-${color}-300 ring-offset-2`
            : `bg-${color}-400 text-white hover:bg-${color}-500`
        }`}
    >
      {label}
      {mode === value && <span className="text-white font-bold">✓</span>}
    </button>
  );

  // 👉 Generează buton pentru 10 / 20 întrebări
  const renderQuestionCountButton = (count) => (
    <button
      onClick={() => handleQuestionCountSelect(count)}
      className={`w-36 px-4 py-2 rounded-lg font-semibold shadow transition
        ${
          questionCount === count
            ? "bg-purple-600 text-white scale-105 ring-4 ring-purple-300 ring-offset-2"
            : "bg-purple-400 text-white hover:bg-purple-500"
        }`}
    >
      {count} Fragen
    </button>
  );

  return (
    <main
      className="min-h-screen bg-light flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_main})` }}
    >
      <Header />

      {!quizStarted ? (
        <motion.div
          className="w-full max-w-3xl px-4 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.02,
            rotateX: 4,
            rotateY: -3,
            boxShadow: "0px 20px 20px -10px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          <div
            className="w-full p-8 rounded-2xl shadow-xl bg-no-repeat bg-center bg-cover border border-white/20 backdrop-blur-md"
            style={{ backgroundImage: `url(${bg_container})` }}
          >
            {/* TITLU */}
            <h2 className="text-4xl font-extrabold text-center mb-6 font-poppins bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow">
              Select Mode
            </h2>

            {/* SELECTARE MOD */}
            <div className="flex justify-center gap-4 mb-4">
              {renderModeButton("Easy", "easy", "green")}
              {renderModeButton("Medium", "medium", "yellow")}
              {renderModeButton("Hard", "hard", "red")}
            </div>

            {/* SELECTARE NUMĂR ÎNTREBĂRI */}
            <div className="flex justify-center gap-4 mb-8">
              {renderQuestionCountButton(10)}
              {renderQuestionCountButton(20)}
            </div>

            {/* START QUIZ */}
            <div className="text-center">
              <button onClick={handleStartQuiz} className="primary-btn">
                Start Quiz
              </button>
            </div>
          </div>
        </motion.div>
      ) : (
        <Quiz
          timeout={timeout}
          mode={mode}
          questionCount={questionCount}
          onRestart={handleRestart}
        />
      )}

      <ToastContainer />
    </main>
  );
}
