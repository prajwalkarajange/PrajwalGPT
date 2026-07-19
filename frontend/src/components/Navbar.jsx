import { FaBell, FaSearch, FaMoon, FaSun, FaInfoCircle, FaUserCircle } from "react-icons/fa";

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <div className="flex items-center justify-between px-5 pb-2 pt-5 sm:px-7">
      <h2
        className={`text-lg font-bold tracking-[-0.03em] sm:text-xl ${
          isDark ? "text-[#f4f7ff]" : "text-[#20244d]"
        }`}
      >
        PrajwalGPT
      </h2>

      <div className="flex items-center gap-2.5">
        <div
          className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium shadow-[0_8px_25px_rgba(122,132,168,0.08)] sm:flex ${
            isDark
              ? "border-white/10 bg-white/5 text-[#9ca6c8]"
              : "border-[#edf0fb] bg-[#f7f8ff] text-[#92a0c2]"
          }`}
        >
          <FaSearch className="text-[0.68rem]" />
          Search
        </div>

        <button className="grid h-9 w-9 place-items-center rounded-full border border-[#edf0fb] bg-white text-[#95a0be] shadow-[0_8px_20px_rgba(122,132,168,0.08)]">
          <FaBell className="text-xs" />
        </button>
        <button
          className={`grid h-9 w-9 place-items-center rounded-full border shadow-[0_8px_20px_rgba(122,132,168,0.08)] transition-colors duration-300 ${
            isDark
              ? "border-white/10 bg-white/5 text-[#c8d0ea]"
              : "border-[#edf0fb] bg-white text-[#95a0be]"
          }`}
          onClick={onToggleTheme}
          type="button"
          aria-label="Toggle theme"
        >
          {isDark ? <FaSun className="text-xs" /> : <FaMoon className="text-xs" />}
        </button>
        <button className="grid h-9 w-9 place-items-center rounded-full border border-[#edf0fb] bg-white text-[#95a0be] shadow-[0_8px_20px_rgba(122,132,168,0.08)]">
          <FaInfoCircle className="text-xs" />
        </button>
        <div className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-[#dfe4fb] bg-[#e9ebff] shadow-[0_8px_20px_rgba(122,132,168,0.08)]">
          <FaUserCircle className="text-2xl text-[#6f63ff]" />
        </div>
      </div>
    </div>
  );
}