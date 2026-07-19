import { useEffect, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function ChatInput({ onSend, disabled, theme }) {
  const isDark = theme === "dark";
  const [value, setValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    if (!value.trim() || disabled) {
      return;
    }

    onSend?.(value);
    setValue("");
    requestAnimationFrame(() => {
      inputRef.current?.focus();
    });
  }

  return (
    <form className="px-5 pb-6 sm:px-7" onSubmit={handleSubmit}>
      <div className={`rounded-3xl border px-4 py-3 shadow-[0_14px_35px_rgba(106,110,156,0.08)] ${isDark ? "border-white/10 bg-white/5" : "border-[#edf0fb] bg-[#fcfcff]"}`}>
        <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 ring-1 ${isDark ? "bg-[#0d1628] ring-white/10" : "bg-white ring-[#eef1fb]"}`}>
          <input
            ref={inputRef}
            className={`min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#c0c6d7] ${isDark ? "text-[#f4f7ff]" : "text-[#3d4568]"}`}
            placeholder="Ask PrajwalGPT anything..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />

          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-linear-to-br from-[#e4dcff] via-[#b9a7ff] to-[#8f75ff] text-white shadow-[0_12px_25px_rgba(111,97,255,0.25)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={disabled || !value.trim()}
            type="submit"
          >
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </div>
    </form>
  );
}