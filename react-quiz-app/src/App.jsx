import { useState } from "react";
import Header from "./components/Header";
import { bg_main, bg_container } from "./assets";
import Quiz from "./components/Quiz";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import questions_de from "./data/questions_de";
import questions_en from "./data/questions_en";
import { de_flag, gb_flag } from "./assets";
import AuthGate from "./components/AuthGate";
import { auth } from "./firebase";
import ResultsPanel from "./components/ResultsPanel";

export default function App() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [mode, setMode] = useState(null);
  const [timeout, setTimeoutValue] = useState(0);
  const [questionCount, setQuestionCount] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showResultsPanel, setShowResultsPanel] = useState(false);
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("quiz_language") || "de";
  });

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
      toast.error(
        language === "de"
          ? "Bitte wähle Modus und Anzahl der Fragen aus."
          : "Please select mode and number of questions.",
        {
          position: "top-center",
          autoClose: 3000,
          style: {
            minWidth: "500px",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: "bold",
          },
        }
      );
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

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const renderModeButton = (label, value) => {
    const isSelected = mode === value;

    const modeStyles = {
      easy: {
        base: "bg-green-400 hover:bg-green-500",
        active: "bg-green-600 ring-4 ring-green-300 ring-offset-2",
      },
      medium: {
        base: "bg-yellow-400 hover:bg-yellow-500",
        active: "bg-yellow-600 ring-4 ring-yellow-300 ring-offset-2",
      },
      hard: {
        base: "bg-red-400 hover:bg-red-500",
        active: "bg-red-600 ring-4 ring-red-300 ring-offset-2",
      },
    };

    const styles = modeStyles[value];

    return (
      <button
        onClick={() => handleModeSelect(value)}
        className={`w-32 px-4 py-2 rounded-lg font-semibold shadow transition flex items-center justify-center gap-1 text-white ${
          isSelected ? styles.active : styles.base
        }`}
      >
        {label}
        {isSelected && <span className="text-white font-bold">✓</span>}
      </button>
    );
  };

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
      {count} {language === "de" ? "Fragen" : "Questions"}
    </button>
  );

  return (
    <main
      className="min-h-screen bg-light flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg_main})` }}
    >
      <Header language={language} />

      {/*  Limbă + Logout */}
      <div className="absolute top-6 right-6 flex gap-2 items-center">
        {isAuthenticated && (
          <button
            onClick={() => {
              import("firebase/auth").then(({ signOut }) => {
                signOut(auth).then(() => {
                  setIsAuthenticated(false);
                  setQuizStarted(false);
                });
              });
            }}
            className="px-3 py-1 text-sm font-semibold primary-btn"
          >
            Logout
          </button>
        )}
        <button
          onClick={() => setShowResultsPanel((prev) => !prev)}
          className="px-3 py-1 text-sm font-semibold primary-btn"
        >
          {language === "de" ? "Deine Punkte" : "Your Score"}
        </button>

        <button
          onClick={() => {
            setLanguage("de");
            localStorage.setItem("quiz_language", "de");
          }}
          className={`w-10 h-7 rounded-full bg-cover bg-center shadow-md border-2 ${
            language === "de"
              ? "border-purple-500 scale-110"
              : "border-transparent"
          }`}
          style={{ backgroundImage: `url(${de_flag})` }}
          aria-label="Deutsch"
        ></button>

        <button
          onClick={() => {
            setLanguage("en");
            localStorage.setItem("quiz_language", "en");
          }}
          className={`w-10 h-7 rounded-full bg-cover bg-center shadow-md border-2 ${
            language === "en"
              ? "border-purple-500 scale-110"
              : "border-transparent"
          }`}
          style={{ backgroundImage: `url(${gb_flag})` }}
          aria-label="English"
        ></button>
      </div>

      {!isAuthenticated ? (
        <AuthGate onAuthSuccess={handleAuthSuccess} language={language} />
      ) : !quizStarted ? (
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
            <h2 className="text-4xl font-extrabold text-center mb-6 font-poppins bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow">
              {language === "de" ? "Modus wählen" : "Select Mode"}
            </h2>

            <div className="flex justify-center gap-4 mb-4">
              {renderModeButton("Easy", "easy", "green")}
              {renderModeButton("Medium", "medium", "yellow")}
              {renderModeButton("Hard", "hard", "red")}
            </div>

            <div className="flex justify-center gap-4 mb-8">
              {renderQuestionCountButton(10)}
              {renderQuestionCountButton(20)}
            </div>

            <div className="text-center">
              <button onClick={handleStartQuiz} className="primary-btn">
                {language === "de" ? "Quiz starten" : "Start Quiz"}
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
          questions={language === "de" ? questions_de : questions_en}
          language={language}
        />
      )}
      {showResultsPanel && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <ResultsPanel
            language={language}
            onClose={() => setShowResultsPanel(false)}
          />
        </div>
      )}
      <ToastContainer />
    </main>
  );
}
