"use client";

import { motion } from "framer-motion";

interface AIRobotProps {
  message: string;
  onFinish: () => void;
}

export default function AIRobot({
  message,
}: AIRobotProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 80,
        y: 100,
        scale: 0.6,
      }}
      animate={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.7,
        type: "spring",
      }}
      className="fixed bottom-5 right-5 z-[9999] flex items-end gap-4"
    >
      {/* Bubble */}

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="
          max-w-[280px]
          rounded-3xl
          bg-white
          dark:bg-zinc-900
          border
          border-orange-500/20
          shadow-2xl
          p-5
        "
      >
        <h3 className="font-bold text-lg text-orange-500">
          👋 Union Add AI
        </h3>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {message}
        </p>
      </motion.div>

      {/* Robot */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="relative h-36 w-32"
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-orange-500/20
            blur-2xl
          "
        />

        {/* Head */}

        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            h-20
            w-20
            rounded-[26px]
            bg-gradient-to-b
            from-zinc-200
            to-zinc-500
            border-4
            border-zinc-700
            shadow-xl
          "
        >
          {/* Eyes */}

          <motion.div
            animate={{
              scaleY: [1, 0.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="absolute top-7 left-4 flex gap-4"
          >
            <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

            <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          </motion.div>

          {/* Mouth */}

          <motion.div
            animate={{
              width: [20, 10, 20],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
            }}
            className="
              absolute
              bottom-4
              left-1/2
              -translate-x-1/2
              h-1
              rounded-full
              bg-orange-400
            "
          />
        </div>

        {/* Body */}

        <div
          className="
            absolute
            top-20
            left-1/2
            -translate-x-1/2
            h-16
            w-16
            rounded-2xl
            bg-gradient-to-b
            from-zinc-700
            to-zinc-900
          "
        >
          {/* AI Core */}

          <motion.div
            animate={{
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="
              absolute
              left-1/2
              top-1/2
              h-6
              w-6
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-orange-500
              shadow-[0_0_25px_#f97316]
            "
          />
        </div>

        {/* Left Arm */}

        <motion.div
          animate={{
            rotate: [0, -25, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
          }}
          className="
            absolute
            left-0
            top-24
            h-2
            w-10
            origin-right
            rounded-full
            bg-zinc-500
          "
        />

        {/* Right Arm */}

        <div
          className="
            absolute
            right-0
            top-24
            h-2
            w-10
            rounded-full
            bg-zinc-500
          "
        />

        {/* Legs */}

        <div className="absolute left-8 bottom-0 h-10 w-2 rounded-full bg-zinc-500" />

        <div className="absolute right-8 bottom-0 h-10 w-2 rounded-full bg-zinc-500" />
      </motion.div>
    </motion.div>
  );
}