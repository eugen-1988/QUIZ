import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import AuthForm from "./AuthForm";
import { motion } from "framer-motion";

export default function AuthGate({ onAuthSuccess, language }) {
  const [checking, setChecking] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        onAuthSuccess(); // Pornește aplicația (quizul) dacă e logat
      } else {
        setIsAuthenticated(false);
      }
      setChecking(false);
    });

    return () => unsubscribe();
  }, [onAuthSuccess]);

  if (checking) {
    return (
      <motion.div
        className="text-white text-xl font-semibold mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {language === "de"
          ? "Lade Authentifizierung..."
          : "Checking authentication..."}
      </motion.div>
    );
  }

  if (!isAuthenticated) {
    return <AuthForm onAuthSuccess={onAuthSuccess} language={language} />;
  }

  return null;
}
