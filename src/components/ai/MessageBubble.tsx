"use client";

import { Bot, User, Copy } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  role: "user" | "assistant";
  content: string;
}

export default function MessageBubble({
  role,
  content,
}: Props) {
  const copyMessage = () => {
    navigator.clipboard.writeText(content);
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`flex ${
        role === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      <div
        className={`flex items-end gap-3 max-w-[92%] md:max-w-[78%] lg:max-w-[70%] ${
          role === "user"
            ? "flex-row-reverse"
            : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`
            h-11
            w-11
            rounded-full
            flex
            items-center
            justify-center
            flex-shrink-0

            ${
              role === "assistant"
                ? "bg-gradient-to-br from-orange-500 to-yellow-500 text-white"
                : "bg-zinc-700 text-white"
            }
          `}
        >
          {role === "assistant" ? (
            <Bot size={20} />
          ) : (
            <User size={20} />
          )}
        </div>

        {/* Bubble */}

        <div
          className={`
            relative
            rounded-3xl
            px-4
            md:px-5
            py-3
            md:py-4
            shadow-lg
            whitespace-pre-wrap
            leading-7

            ${
              role === "assistant"
                ? "bg-zinc-900 border border-zinc-800 text-white"
                : "bg-orange-500 text-white"
            }
          `}
        >
          {content}

          <button
            onClick={copyMessage}
            className="
              absolute
              -top-3
              -right-3
              h-8
              w-8
              rounded-full
              bg-zinc-800
              border
              border-zinc-700
              flex
              items-center
              justify-center
              opacity-0
              hover:bg-orange-500
              group-hover:opacity-100
              transition
            "
          >
            <Copy size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}