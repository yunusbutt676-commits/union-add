
"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, Sparkles } from "lucide-react";

import ChatHeader from "../../components/ai/ChatHeader";
import ChatInput from "../../components/ai/ChatInput";
import SuggestedCards from "../../components/ai/SuggestedCards";
import MessageBubble from "../../components/ai/MessageBubble";
import TypingIndicator from "../../components/ai/TypingIndicator";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const hasMessages = messages.length > 0;

  // Scroll to the newest message.
  useEffect(() => {
    if (!hasMessages && !loading) return;

    messagesEndRef.current?.scrollIntoView({
      behavior: "auto",
      block: "end",
    });
  }, [messages, loading, hasMessages]);

  // Start a fresh conversation.
  const handleNewChat = () => {
    if (loading) return;

    setMessage("");
    setMessages([]);
    setLoading(false);
  };

  // Fill the chat input with a suggested question.
  const handleSelect = (prompt: string) => {
    if (loading) return;

    setMessage(prompt);
  };

  return (
    <main
      className="
        flex
        h-dvh
        min-h-0
        w-full
        min-w-0
        flex-col
        overflow-hidden

        bg-gray-50
        text-gray-950

        dark:bg-[#0B0B0C]
        dark:text-white
      "
    >
      {/* CHAT HEADER */}
      <div className="relative z-20 shrink-0">
        <ChatHeader onNewChat={handleNewChat} />
      </div>

      {/* CHAT CONTENT */}
      <section
        aria-label="Union Add AI conversation"
        className="
          min-h-0
          min-w-0
          flex-1
          overflow-y-auto
          overscroll-contain

          px-3
          py-5

          sm:px-5
          sm:py-7

          md:px-8
          md:py-10

          [scrollbar-width:thin]
        "
      >
        <div className="mx-auto w-full max-w-6xl">
          {!hasMessages ? (
            /* WELCOME SCREEN */
            <div className="mx-auto w-full">
              {/* WELCOME ICON */}
              <div
                aria-hidden="true"
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center

                  rounded-2xl

                  bg-gradient-to-br
                  from-orange-500
                  to-yellow-500

                  text-white

                  shadow-lg
                  shadow-orange-500/20

                  sm:h-16
                  sm:w-16
                "
              >
                <Bot className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>

              {/* WELCOME HEADING */}
              <div className="mt-5 text-center sm:mt-7">
                <div
                  className="
                    mx-auto
                    mb-3
                    inline-flex
                    items-center
                    gap-2

                    rounded-full
                    border
                    border-orange-500/20

                    bg-orange-500/5

                    px-3
                    py-1.5

                    text-xs
                    font-medium

                    text-orange-600

                    dark:bg-orange-500/10
                    dark:text-orange-400
                  "
                >
                  <Sparkles
                    aria-hidden="true"
                    className="h-3.5 w-3.5"
                  />
                  Your AI-powered business assistant
                </div>

                <h1
                  className="
                    text-2xl
                    font-bold
                    tracking-tight

                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                  "
                >
                  Hello! I&apos;m{" "}
                  <span
                    className="
                      bg-gradient-to-r
                      from-orange-500
                      to-yellow-500

                      bg-clip-text
                      text-transparent
                    "
                  >
                    Union Add AI
                  </span>
                </h1>

                <p
                  className="
                    mx-auto
                    mt-3
                    max-w-2xl

                    text-sm
                    leading-6

                    text-gray-600

                    sm:mt-4
                    sm:text-base
                    sm:leading-7

                    dark:text-zinc-400
                  "
                >
                  Explore our web development, mobile apps,
                  digital marketing, branding, and creative
                  services. Ask a question or choose a topic
                  below to get started.
                </p>
              </div>

              {/* SUGGESTED SERVICES */}
              <div className="mt-7 sm:mt-10 md:mt-12">
                <h2
                  className="
                    mb-4
                    text-center
                    text-sm
                    font-semibold

                    text-gray-700

                    sm:mb-5
                    sm:text-base

                    dark:text-zinc-300
                  "
                >
                  How can we help you today?
                </h2>

                <SuggestedCards onSelect={handleSelect} />
              </div>
            </div>
          ) : (
            /* ACTIVE CONVERSATION */
            <div
              className="
                mx-auto
                flex
                w-full
                max-w-5xl
                flex-col
                gap-5

                pb-5

                sm:gap-6
                sm:pb-8
              "
            >
              <h1 className="sr-only">
                Union Add AI conversation
              </h1>

              {messages.map((chatMessage, index) => (
                <MessageBubble
                  key={index}
                  role={chatMessage.role}
                  content={chatMessage.content}
                />
              ))}

              {/* AI TYPING ANIMATION */}
              {loading && <TypingIndicator />}

              <div
                ref={messagesEndRef}
                aria-hidden="true"
              />
            </div>
          )}

          {/* SCROLL TARGET FOR INITIAL RESPONSE */}
          {!hasMessages && loading && (
            <div className="mx-auto mt-6 max-w-5xl">
              <TypingIndicator />
              <div ref={messagesEndRef} aria-hidden="true" />
            </div>
          )}
        </div>
      </section>

      {/* FIXED-BOTTOM CHAT INPUT WITHIN PAGE */}
      <div className="relative z-20 shrink-0">
        <ChatInput
          message={message}
          setMessage={setMessage}
          messages={messages}
          setMessages={setMessages}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
    </main>
  );
}
