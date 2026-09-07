"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, ShieldCheck } from "lucide-react";

interface Props {
  onNewChat: () => void;
}

export default function ChatHeader({
  onNewChat,
}: Props) {
  return (
    <div
      className="
        border-b
        border-zinc-800
        bg-[#0F0F10]/90
        backdrop-blur-xl
        px-4
        md:px-8
        py-5
      "
    >
      <div className="flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-4">

          <motion.div
            animate={{
              y: [0, -5, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
              relative
              h-12
              w-12
              md:h-16
              md:w-16
              rounded-2xl
              bg-gradient-to-br
              from-orange-500
              via-orange-400
              to-yellow-500
              flex
              items-center
              justify-center
              shadow-[0_0_35px_rgba(249,115,22,.45)]
            "
          >
            <Bot
              size={26}
              className="md:w-9 md:h-9 text-white"
            />

            <span
              className="
                absolute
                bottom-1
                right-1
                h-4
                w-4
                rounded-full
                bg-green-500
                border-2
                border-[#0F0F10]
                animate-pulse
              "
            />
          </motion.div>

          <div>
            <h2
              className="
                text-lg
                sm:text-xl
                md:text-2xl
                font-bold
                bg-gradient-to-r
                from-orange-400
                via-yellow-400
                to-orange-500
                bg-clip-text
                text-transparent
              "
            >
              Union Add AI
            </h2>

            <div className="flex items-center gap-2 mt-1">
              <ShieldCheck
                size={15}
                className="text-green-400"
              />

              <span className="text-xs sm:text-sm text-zinc-400">
                Online
              </span>
            </div>
          </div>

        </div>

        {/* Right */}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onNewChat}
          className="
          hidden
          sm:flex
          items-center
          mr-10
          gap-2
          px-4
          py-2
          rounded-xl
          bg-orange-500
          hover:bg-orange-600
          text-white
          transition
          "
        >
          <Sparkles size={18} />
          <span className="hidden sm:inline">
            New Chat
          </span>
        </motion.button>

      </div>
    </div>
  );
}