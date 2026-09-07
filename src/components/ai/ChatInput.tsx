"use client";

import { SendHorizonal } from "lucide-react";
import { useRef, useState } from "react";

interface Props {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  messages: any[];
  setMessages: React.Dispatch<React.SetStateAction<any[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ChatInput({
  message,
  setMessage,
  messages,
  setMessages,
  loading,
  setLoading,
}: Props) {

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = async () => {
    if (!message.trim() || loading) return;

    const userMessage = message;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    setMessage("");

    if (textareaRef.current) {
      textareaRef.current.style.height = "28px";
    }

    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
        }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="border-t border-zinc-800 bg-[#0B0B0C] p-4">

      <div className="mx-auto max-w-5xl">

        <div
          className="
            flex
            items-end
            rounded-[28px]
            border
            border-zinc-700
            bg-[#1B1B1D]
            px-5
            py-3
            transition
            focus-within:border-orange-500
          "
        >

          <textarea
            ref={textareaRef}
            rows={1}
            value={message}
            placeholder="Message Union Add AI..."
            onChange={(e) => {
              setMessage(e.target.value);

              e.target.style.height = "28px";
              e.target.style.height =
                e.target.scrollHeight + "px";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            className="
              flex-1
              resize-none
              bg-transparent
              text-white
              placeholder:text-zinc-500
              outline-none
              max-h-40
              overflow-y-auto
            "
          />

          <div className="ml-4 flex items-center gap-2">

            <button
              onClick={handleSend}
              disabled={loading}
              className="
                h-11
                w-11
                rounded-full
                bg-white
                text-black
                hover:scale-105
                disabled:opacity-50
                flex
                items-center
                justify-center
                transition
              "
            >
              <SendHorizonal size={19} />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}