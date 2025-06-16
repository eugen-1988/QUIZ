import { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import questions_de from "../data/questions_de";
import questions_en from "../data/questions_en";
import Question from "./Question";
import Summary from "./Summary";
import { bg_container } from "../assets";

export default function Quiz({
  timeout,
  mode,
  questionCount,
  onRestart,
  language,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizDone, setQuizDone] = useState(false);

  const answeredRef = useRef(false);

  // 🔁 Selectăm fișierul de întrebări în funcție de limbă
  const questions = language === "en" ? questions_en : questions_de;

  // 🔁 Selectăm doar primele N întrebări
  const selectedQuestions = useMemo(
    () => questions.slice(0, questionCount),
    [questions, questionCount]
  );

  const currentQuestion = selectedQuestions[activeIndex];

  const handleAnswer = (answer) => {
    if (answeredRef.current) return;
    answeredRef.current = true;

    const isCorrect = answer === currentQuestion.answers[0];

    setUserAnswers((prev) => [
      ...prev,
      { question: currentQuestion, answer, isCorrect },
    ]);

    setTimeout(() => {
      answeredRef.current = false;

      if (activeIndex + 1 < selectedQuestions.length) {
        setActiveIndex((prev) => prev + 1);
      } else {
        setQuizDone(true);
      }
    }, 3000); // Poți regla delay-ul după cum dorești
  };

  return (
    <motion.div
      className="w-full max-w-3xl px-4 p-6 rounded-2xl bg-cover bg-center bg-no-repeat border border-white/20 backdrop-blur-md shadow-xl"
      style={{ backgroundImage: `url(${bg_container})` }}
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {!quizDone ? (
        <Question
          key={currentQuestion.id}
          question={currentQuestion}
          onSelect={handleAnswer}
          onTimeout={() => handleAnswer(null)}
          timeout={timeout}
          mode={mode}
          language={language}
        />
      ) : (
        <Summary
          answers={userAnswers}
          onRestart={onRestart}
          language={language}
        />
      )}
    </motion.div>
  );
}
