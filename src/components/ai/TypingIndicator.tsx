"use client";

import { Bot } from "lucide-react";
import { motion } from "framer-motion";

export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-3">

      <div
        className="
          h-11
          w-11
          rounded-full
          bg-gradient-to-br
          from-orange-500
          to-yellow-500
          flex
          items-center
          justify-center
          text-white
        "
      >
        <Bot size={20} />
      </div>

      <div
        className="
          rounded-3xl
          bg-zinc-900
          border
          border-zinc-800
          px-6
          py-5
        "
      >
        <div className="flex gap-2">

          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 0.7,
                delay: i * 0.15,
              }}
              className="
                h-3
                w-3
                rounded-full
                bg-orange-500
              "
            />
          ))}

        </div>

        <p className="mt-3 text-xs text-zinc-500">
          Union Add AI is thinking...
        </p>

      </div>

    </div>
  );
}