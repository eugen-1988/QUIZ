// src/components/ResultsPanel.jsx
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  FaUserAlt,
  FaStar,
  FaClock,
  FaChartLine,
  FaRedo,
  FaGamepad,
  FaTimes,
} from "react-icons/fa";

export default function ResultsPanel({ language, onClose }) {
  const [bestScore, setBestScore] = useState(null);
  const [lastScore, setLastScore] = useState(null);
  const [lastAttemptDate, setLastAttemptDate] = useState(null);
  const [lastMode, setLastMode] = useState(null);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [nickname, setNickname] = useState(null);

  useEffect(() => {
    const fetchResults = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const q = query(
        collection(db, "quizResults"),
        where("uid", "==", user.uid),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);
      const results = snapshot.docs.map((doc) => doc.data());

      if (results.length > 0) {
        setLastScore(results[0].score);
        setLastAttemptDate(results[0].createdAt?.toDate());
        setLastMode(results[0].mode || null);
        setTotalAttempts(results.length);
        setNickname(results[0].nickname || "Unknown");

        const best = Math.max(...results.map((r) => r.score));
        setBestScore(best);
      }
    };

    fetchResults();
  }, []);

  const fadeVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
  };

  const resultsData = [
    {
      icon: <FaUserAlt className="text-pink-400" />,
      label: language === "de" ? "Spitzname" : "Nickname",
      value: nickname,
    },
    {
      icon: <FaRedo className="text-yellow-400" />,
      label: language === "de" ? "Letztes Ergebnis" : "Last result",
      value: lastScore,
    },
    {
      icon: <FaStar className="text-amber-400" />,
      label: language === "de" ? "Bestes Ergebnis" : "Best result",
      value: bestScore,
    },
    {
      icon: <FaChartLine className="text-green-400" />,
      label: language === "de" ? "Versuche insgesamt" : "Total attempts",
      value: totalAttempts,
    },
    {
      icon: <FaClock className="text-blue-400" />,
      label: language === "de" ? "Letzter Versuch" : "Last attempt",
      value: lastAttemptDate
        ? {
            date: format(lastAttemptDate, "dd.MM.yyyy"),
            time: format(lastAttemptDate, "HH:mm"),
          }
        : null,
    },
    {
      icon: <FaGamepad className="text-indigo-400" />,
      label: language === "de" ? "Modus" : "Mode",
      value: lastMode
        ? lastMode.charAt(0).toUpperCase() + lastMode.slice(1)
        : null,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mt-8 px-8 py-10 rounded-3xl bg-white/10 border border-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgba(128,90,213,0.25)] text-white max-w-2xl w-full mx-auto"
    >
      {/* Close Button */}
      {onClose && (
        <motion.button
          whileHover={{ rotate: 90, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-primary hover:text-secondary transition text-xl"
        >
          <FaTimes />
        </motion.button>
      )}

      {/* Title with gradient */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent"
      >
        {language === "de" ? "Deine Ergebnisse" : "Your Results"}
      </motion.h3>

      <div className="space-y-4">
        {resultsData.map(
          (item, i) =>
            item.value !== null && (
              <motion.div
                key={i}
                custom={i}
                variants={fadeVariant}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition duration-300 backdrop-blur-sm border border-white/20"
              >
                {/* Gradient Icon */}
                <div className="text-2xl bg-gradient-to-tr from-pink-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
                  {item.icon}
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-lg font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400  bg-clip-text text-transparent">
                    {item.label}
                  </p>
                  {typeof item.value === "object" && item.value?.date ? (
                    <div className="text-right">
                      <p className="text-sm font-semibold text-purple-300">
                        📅 {item.value.date}
                      </p>
                      <p className="text-sm font-semibold text-purple-300">
                        🕒 {item.value.time}
                      </p>
                    </div>
                  ) : (
                    <p className="text-lg font-semibold text-purple-300">
                      {item.value}
                    </p>
                  )}
                </div>
              </motion.div>
            )
        )}
      </div>
    </motion.div>
  );
}
