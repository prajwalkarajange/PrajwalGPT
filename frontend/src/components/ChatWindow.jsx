import { useEffect, useRef } from "react";
import { FaChevronDown, FaPen, FaUserAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import Message from "./Message";
import TypingLoader from "./TypingLoader";

export default function ChatWindow({ messages, isTyping, theme }) {
  const isDark = theme === "dark";
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <div className="flex-1 px-5 pb-4 pt-2 sm:px-7 sm:pb-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-7 flex items-center justify-center gap-3">
          <button className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-[0_8px_22px_rgba(101,97,156,0.08)] ${isDark ? "border-white/10 bg-white/5 text-[#f4f7ff]" : "border-[#eceefe] bg-white text-[#2e3160]"}`}>
            <BsStars className="text-[#7f6dff]" />
            GPT-3.5
          </button>
          <button className={`inline-flex items-center gap-2 rounded-full border border-transparent bg-transparent px-4 py-2 text-sm font-semibold ${isDark ? "text-[#9ca6c8]" : "text-[#c0c6de]"}`}>
            <BsStars className="text-[#d9ddee]" />
            GPT-4
          </button>
        </div>

        <div className="mb-3 flex justify-center">
          <button className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium shadow-[0_6px_18px_rgba(124,132,170,0.08)] ${isDark ? "border-white/10 bg-white/5 text-[#9ca6c8]" : "border-[#edf0fb] bg-white text-[#8f99b6]"}`}>
            No plugins enabled
            <FaChevronDown className="text-[0.65rem]" />
          </button>
        </div>

        <div className={`rounded-[1.65rem] border px-4 py-3 shadow-[0_20px_55px_rgba(92,87,156,0.12)] sm:px-6 sm:py-4 ${isDark ? "border-white/10 bg-[#0d1628]" : "border-[#eceff9] bg-white"}`}>
          {messages.length === 0 ? (
            <div className={`flex items-start gap-3 border-b pb-3 ${isDark ? "border-white/10" : "border-[#f0f2fa]"}`}>
              <div className={`grid h-8 w-8 place-items-center rounded-full ${isDark ? "bg-white/10 text-[#9b90ff]" : "bg-[#f2f0ff] text-[#6b5cff]"}`}>
                <FaUserAlt className="text-[0.7rem]" />
              </div>
              <div className={`min-w-0 flex-1 text-sm font-medium ${isDark ? "text-[#dbe2ff]" : "text-[#434970]"}`}>
                Your Personal AI Assistant
              </div>
              <FaPen className={`text-sm ${isDark ? "text-[#8a96bb]" : "text-[#9199b7]"}`} />
            </div>
          ) : null}

          <div className="space-y-4 py-4">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
            {isTyping ? <TypingLoader /> : null}
            <div ref={bottomRef} />
          </div>
        </div>

        <div className="relative z-10 -mt-8 flex justify-center">
          <div className="rounded-full bg-linear-to-r from-[#5b46ff] via-[#6c4ef5] to-[#7c48ee] px-8 py-4 text-lg font-semibold tracking-[-0.03em] text-white shadow-[0_18px_38px_rgba(86,72,238,0.38)]">
            prajwalgpt.com
          </div>
        </div>
      </div>
    </div>
  );
}