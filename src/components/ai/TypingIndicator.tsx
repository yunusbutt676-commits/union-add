
"use client";

import { Bot } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const dots = [0, 1, 2];

export default function TypingIndicator() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      role="status"
      aria-label="Union Add AI assistant is preparing a response"
      aria-live="polite"
      aria-atomic="true"
      className="
        flex
        w-full
        min-w-0
        max-w-full
        items-end
        gap-2
        sm:gap-3
      "
    >
      {/* AI AVATAR */}
      <div
        aria-hidden="true"
        className="
          flex
          h-9
          w-9
          shrink-0
          items-center
          justify-center

          rounded-full

          bg-gradient-to-br
          from-orange-500
          to-yellow-500

          text-white

          shadow-sm
          shadow-orange-500/20

          sm:h-11
          sm:w-11
        "
      >
        <Bot
          size={20}
          strokeWidth={2}
          className="h-5 w-5"
        />
      </div>

      {/* TYPING BUBBLE */}
      <div
        className="
          min-w-0
          max-w-[calc(100%-3rem)]

          rounded-2xl
          rounded-bl-md

          border
          border-gray-200

          bg-white

          px-4
          py-4

          shadow-sm

          sm:rounded-3xl
          sm:px-6
          sm:py-5

          dark:border-zinc-800
          dark:bg-zinc-900
        "
      >
        {/* ANIMATED DOTS */}
        <div
          aria-hidden="true"
          className="
            flex
            items-center
            gap-1.5
            sm:gap-2
          "
        >
          {dots.map((index) => (
            <motion.span
              key={index}
              className="
                block
                h-2.5
                w-2.5
                shrink-0

                rounded-full

                bg-orange-500

                sm:h-3
                sm:w-3
              "
              animate={
                shouldReduceMotion
                  ? { y: 0 }
                  : {
                      y: [0, -6, 0],
                      opacity: [0.6, 1, 0.6],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      repeat: Infinity,
                      duration: 0.9,
                      delay: index * 0.15,
                      ease: "easeInOut",
                    }
              }
            />
          ))}
        </div>

        {/* STATUS TEXT */}
        <p
          className="
            mt-3
            text-[11px]
            leading-5

            text-gray-600

            sm:text-xs

            dark:text-zinc-400
          "
        >
          Union Add AI is thinking...
        </p>
      </div>
    </div>
  );
}
