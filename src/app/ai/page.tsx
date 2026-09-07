import ChatHeader from "../../components/ai/ChatHeader";
import ChatInput from "../../components/ai/ChatInput";
import SuggestedCards from "../../components/ai/SuggestedCards";

export default function AIPage() {
  return (
    <main className="h-screen bg-black text-white flex">
      <ChatSidebar />

      <div className="flex-1 flex flex-col">
        <ChatHeader />

        <div className="flex-1 p-8">
          <h1 className="text-5xl font-bold mb-10">
            Hello! I'm Union Add AI
          </h1>

          <SuggestedCards />
        </div>

        <ChatInput />
      </div>
    </main>
  );
}