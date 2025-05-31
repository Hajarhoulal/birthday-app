'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

export default function Home() {
  const [showSurprise, setShowSurprise] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setShowSurprise(true);
    confetti({
      particleCount: 250,
      spread: 120,
      origin: { y: 0.6 },
    });
    audioRef.current?.play();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#ffd6ec] via-[#ffe9c7] to-[#d4f1f9] text-[#4a235a] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Arrière-plan décoratif */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white opacity-30 rounded-full blur-sm animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Titre */}
      <motion.h1
        className="text-5xl sm:text-6xl font-extrabold text-pink-600 drop-shadow-lg z-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        🎂 Joyeux Anniversaire !
      </motion.h1>

      {/* Bouton surprise */}
      <motion.button
        onClick={handleClick}
        className="mt-6 px-8 py-4 bg-pink-400 text-white font-bold text-xl rounded-full shadow-xl hover:bg-pink-500 hover:scale-105 transition-all z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🎁 Click!
      </motion.button>

      {/* Surprise */}
      {showSurprise && (
        <motion.div
          className="mt-10 max-w-3xl bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl z-20 border-2 border-pink-200 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 mb-4">💖 AFAAAAAAAAAAAF 💖</h2>
          <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
            Happy Birthday to my partner-in-crime and my dearest friend!
            I can't imagine going through life without you by my side. 
            Thank you for all the laughter, the support, the adventures, and for just being you.
            You deserve all the happiness in the world today and always. I love you!
          </p>
        </motion.div>
      )}

      {/* Audio */}
      <audio ref={audioRef} src="/birthday.mp3" preload="auto" />

      {/* Animation CSS */}
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float infinite;
        }
      `}</style>
    </main>
  );
}
