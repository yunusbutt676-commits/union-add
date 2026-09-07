"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import AIChatModal from "./AIChatModal";
import AIRobot from "./AIRobot";

export default function AIFloatingButton() {
  const [open, setOpen] = useState(false);

  // Robot intro
  const [showRobot, setShowRobot] = useState(true);

  // Floating button
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRobot(false);

      setTimeout(() => {
        setShowButton(true);
      }, 700);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Intro Robot */}

      <AnimatePresence>
        {showRobot && (
          <motion.div
            exit={{
              scale: 0,
              rotate: 360,
              opacity: 0,
              x: 30,
              y: 60,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <AIRobot
              message="👋 Hi! I'm Union Add AI. How can i Help you Today."
              onFinish={() => {}}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating AI Button */}

      <AnimatePresence>
        {showButton && (
          <motion.button
            initial={{
              opacity: 0,
              scale: 0,
              rotate: 180,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: [0, -8, 0],
            }}
            transition={{
              duration: 0.6,
              y: {
                repeat: Infinity,
                duration: 2,
              },
            }}
            onClick={() => setOpen(true)}
            className="
              fixed
              bottom-24
              right-4
              md:bottom-6
              md:right-6
              z-[9999]
              h-16
              w-16
              md:h-16
              md:w-16
              h-14
              w-14
              rounded-full
              bg-gradient-to-br
              from-orange-500
              via-orange-400
              to-yellow-500
              shadow-[0_0_40px_rgba(249,115,22,.55)]
              flex
              items-center
              justify-center
              text-white
              hover:scale-110
              transition-all
            "
          >
            <Sparkles size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {open && (
        <AIChatModal
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}