"use client";

import { useState } from "react";
import ChatHeader from "../../components/ai/ChatHeader";
import ChatInput from "../../components/ai/ChatInput";
import SuggestedCards from "../../components/ai/SuggestedCards";

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleNewChat = () => {
    setMessage("");
    setMessages([]);
    setLoading(false);
  };

  const handleSelect = (prompt: string) => {
    setMessage(prompt);
  };

  return (
    <main className="h-screen bg-black text-white flex">
      <div className="flex-1 flex flex-col">
        <ChatHeader onNewChat={handleNewChat} />

        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-5xl font-bold mb-10">
            Hello! I'm Union Add AI
          </h1>

          <SuggestedCards onSelect={handleSelect} />
        </div>

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