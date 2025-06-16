import { quiz_logo } from "../assets";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="px-6 py-4 mb-6 flex flex-col items-center">
      {/* TITLU H1 CU SPACING MIC */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        className="text-4xl sm:text-5xl font-extrabold text-center font-poppins bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow mb-2"
      >
        Welcome to React Quiz
      </motion.h1>

      {/* IMAGINEA CU EFECT DE ROTIRE ȘI UMBRĂ */}
      <div className="max-w-screen-md w-full flex items-center justify-center perspective-1000">
        <motion.img
          src={quiz_logo}
          alt="Quiz Logo"
          initial={{ opacity: 0, scale: 0.8, rotateX: -15 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          whileHover={{
            scale: 1.05,
            rotateY: 8,
            rotateX: -3,
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="w-full max-w-[400px] h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)] rounded-2xl"
        />
      </div>
    </header>
  );
}
