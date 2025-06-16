import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

export default function AuthForm({ onAuthSuccess, language }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        // Setează nickname în profilul Firebase
        await updateProfile(userCredential.user, {
          displayName: nickname,
        });

        toast.success(
          language === "de"
            ? "Registrierung erfolgreich!"
            : "Registration successful!"
        );
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success(
          language === "de" ? "Anmeldung erfolgreich!" : "Login successful!"
        );
      }

      onAuthSuccess();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="w-full max-w-md p-6 rounded-2xl shadow-xl bg-white/10 backdrop-blur-md border border-white/20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2 className="text-3xl font-bold text-center font-poppins text-white mb-4">
        {isRegistering
          ? language === "de"
            ? "Registrieren"
            : "Register"
          : language === "de"
          ? "Anmelden"
          : "Login"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isRegistering && (
          <input
            type="text"
            placeholder={language === "de" ? "Spitzname" : "Nickname"}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        )}

        <input
          type="email"
          placeholder={language === "de" ? "E-Mail" : "Email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="password"
          placeholder={language === "de" ? "Passwort" : "Password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 rounded-md font-bold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:brightness-110 transition"
        >
          {loading
            ? language === "de"
              ? "Lädt..."
              : "Loading..."
            : isRegistering
            ? language === "de"
              ? "Konto erstellen"
              : "Create Account"
            : language === "de"
            ? "Anmelden"
            : "Login"}
        </button>
      </form>

      <div className="mt-4 text-center text-white text-sm">
        {isRegistering
          ? language === "de"
            ? "Schon ein Konto? "
            : "Already have an account? "
          : language === "de"
          ? "Noch kein Konto? "
          : "No account yet? "}
        <button
          type="button"
          onClick={() => setIsRegistering(!isRegistering)}
          className="font-semibold underline hover:text-yellow-300"
        >
          {isRegistering
            ? language === "de"
              ? "Jetzt anmelden"
              : "Login here"
            : language === "de"
            ? "Registrieren"
            : "Register"}
        </button>
      </div>
    </motion.div>
  );
}
