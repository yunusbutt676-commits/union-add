"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import SuggestedCards from "./SuggestedCards";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";

interface Props {
  onClose: () => void;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChatModal({ onClose }: Props) {

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);


  const [showWelcome, setShowWelcome] = useState(false);

  const showWelcomeMessage = () => {
    setShowWelcome(true);

    setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
  };

  useEffect(() => {
    showWelcomeMessage();
  }, []);

  const bottomRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const handleNewChat = () => {
    setMessages([]);
    setMessage("");

    showWelcomeMessage();
  };

  return (
    <AnimatePresence>

      <motion.div
        initial={{
          opacity: 0,
          backdropFilter: "blur(0px)",
        }}

        animate={{
          opacity: 1,
          backdropFilter: "blur(10px)",
        }}

        exit={{
          opacity: 0,
        }}

        className="
          fixed
          inset-0
          z-[9999]
          bg-black/60
          flex
          items-center
          justify-center
          p-2
          md:p-5
        "
      >


        <motion.div

          initial={{
            opacity: 0,
            scale: 0.9,
            y: 40,
          }}

          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}

          transition={{
            duration: 0.35,
          }}

          className="
            relative
            flex
            flex-col
            w-full
            max-w-6xl
            h-[100dvh]
            md:h-[92vh]
            rounded-none
            md:rounded-[30px]
            overflow-hidden
            border
            border-zinc-800
            bg-[#0B0B0C]
            shadow-2xl
            safe-area-inset-bottom
            "

        >


          {/* Close Button */}

          <button

            onClick={onClose}

            className="
            absolute
            top-4
            right-4
            md:top-5
            md:right-5
            z-50
            h-11
            w-11
            rounded-full
            border
            border-zinc-700
            bg-zinc-900
            text-white
            flex
            items-center
            justify-center
            transition-all
            duration-200
            hover:bg-orange-500
            hover:border-orange-500
            hover:text-white
            hover:rotate-90
            hover:scale-110
            active:scale-95
            "

          >

            <X size={20} />

          </button>



          {/* Header */}

          <ChatHeader
            onNewChat={handleNewChat}
          />

          {/* Messages */}

          <div

            className="
              flex-1
              overflow-y-auto
              px-3
              sm:px-4
              md:px-8
              py-4
              md:py-6
              bg-gradient-to-b
              from-[#0B0B0C]
              via-[#111111]
              to-[#0B0B0C]
            "

          >

            <div className="max-w-5xl mx-auto space-y-6">


              <AnimatePresence>

                {showWelcome && (

                  <motion.div

                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}

                  >

                    <MessageBubble
                      role="assistant"
                      content="👋 Welcome to Union Add AI. I'm here to help you with your queries."
                    />

                  </motion.div>

                )}

              </AnimatePresence>

              {messages.map((msg, index) => (

                <motion.div

                  key={index}

                  initial={{
                    opacity: 0,
                    y: 10,
                  }}

                  animate={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: .25,
                  }}

                >

                  <MessageBubble
                    role={msg.role}
                    content={msg.content}
                  />

                </motion.div>

              ))}



              {loading && <TypingIndicator />}



              {messages.length === 0 && (

                <SuggestedCards

                  onSelect={(prompt) =>
                    setMessage(prompt)
                  }

                />

              )}



              <div ref={bottomRef} />


            </div>

          </div>



          {/* Input */}

          <ChatInput

            message={message}

            setMessage={setMessage}

            messages={messages}

            setMessages={setMessages}

            loading={loading}

            setLoading={setLoading}

          />


        </motion.div>


      </motion.div>


    </AnimatePresence>
  );
}