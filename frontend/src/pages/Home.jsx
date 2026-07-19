import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ChatWindow from "../components/ChatWindow";
import ChatInput from "../components/ChatInput";
import { askAI } from "../services/api";

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [theme, setTheme] = useState("light");
  const [conversationId] = useState(() => "default");

  async function handleSend(content) {
    const trimmed = content.trim();

    if (!trimmed || isTyping) {
      return;
    }

    const userMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    setMessages((currentMessages) => [...currentMessages, userMessage]);
    setIsTyping(true);

    try {
      const assistantReply = await askAI(conversationId, trimmed);

      setMessages((currentMessages) => [
        ...currentMessages,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: assistantReply,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  }

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  const isDark = theme === "dark";

  return (
    <div
      className={`relative min-h-screen overflow-hidden transition-colors duration-300 ${
        isDark ? "bg-[#09111f] text-[#f4f7ff]" : "bg-[#f7f8ff] text-[#17163e]"
      }`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full blur-[90px] ${
            isDark ? "bg-[#5d4dff]/20" : "bg-[#8d7cff]/30"
          }`}
        />
        <div
          className={`absolute -bottom-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full blur-[110px] ${
            isDark ? "bg-[#9b7aff]/12" : "bg-[#c7a8ff]/30"
          }`}
        />
        <div
          className={`absolute -right-24 top-10 h-72 w-72 rounded-full blur-[100px] ${
            isDark ? "bg-[#ffcf9c]/10" : "bg-[#ffcf9c]/20"
          }`}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex flex-col items-center gap-4 text-center">
          <div
            className={`inline-flex items-center gap-3 rounded-full border px-4 py-2 shadow-[0_10px_30px_rgba(110,101,181,0.12)] backdrop-blur transition-colors duration-300 ${
              isDark ? "border-white/10 bg-white/5" : "border-white/80 bg-white/85"
            }`}
          >
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-br from-[#7f6dff] via-[#8c7fff] to-[#b79cff] text-white shadow-[0_12px_25px_rgba(127,109,255,0.35)]">
              <span className="text-lg font-black leading-none">◔</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight">PrajwalGPT</span>
              <span className="rounded-full bg-[#efeaff] px-2.5 py-1 text-[11px] font-semibold text-[#8a77ff]">
                Spring AI + Groq
              </span>
            </div>
          </div>

          <div className="max-w-4xl">
            <h1
              className={`text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[4.15rem] lg:leading-[0.96] ${
                isDark ? "text-[#f4f7ff]" : "text-[#161748]"
              }`}
            >
              Your Personal AI Assistant
              <span className="block font-extrabold">PrajwalGPT</span>
            </h1>

            <div className="mx-auto mt-4 h-1.5 w-[min(18rem,70vw)] rounded-full bg-linear-to-r from-[#5b4bff] via-[#d756e8] to-[#ffbf70]" />
          </div>
        </header>

        <main className="relative mt-8 flex flex-1 items-start justify-center pb-4">
          <div className="relative w-full max-w-5xl">
            <div
              className={`absolute inset-x-10 top-10 h-56 rounded-[2.5rem] blur-3xl transition-colors duration-300 ${
                isDark ? "bg-[#5f52ff]/15" : "bg-[#7f6dff]/10"
              }`}
            />

            <div
              className={`relative overflow-hidden rounded-4xl border shadow-[0_24px_90px_rgba(91,75,182,0.12)] backdrop-blur-xl transition-colors duration-300 ${
                isDark
                  ? "border-white/10 bg-[#10192b]/90"
                  : "border-white/90 bg-white/80"
              }`}
            >
              <div className="flex items-stretch">
                <Sidebar theme={theme} />

                <div className="flex min-w-0 flex-1 flex-col">
                  <Navbar theme={theme} onToggleTheme={toggleTheme} />
                  <ChatWindow messages={messages} isTyping={isTyping} theme={theme} />
                  <ChatInput onSend={handleSend} disabled={isTyping} theme={theme} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}