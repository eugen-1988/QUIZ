// src/utils/saveQuizResult.js
import { auth, db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/**
 * Salvează rezultatul quizului în Firestore.
 * @param {number} score - Numărul de răspunsuri corecte
 * @param {string} mode - Modul de dificultate (easy, medium, hard)
 */
export const saveQuizResult = async (score, mode) => {
  const user = auth.currentUser;
  if (!user) return;

  const result = {
    uid: user.uid,
    email: user.email,
    nickname: user.displayName || "Unknown",
    score,
    mode,
    createdAt: serverTimestamp(),
  };

  try {
    await addDoc(collection(db, "quizResults"), result);
    console.log("✅ Quiz result saved!");
  } catch (err) {
    console.error("❌ Error saving result:", err);
  }
};
