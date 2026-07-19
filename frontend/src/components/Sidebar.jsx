import { FaPlus } from "react-icons/fa";
import { FaThLarge, FaHome, FaRegFileAlt, FaLock, FaChevronDown } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

export default function Sidebar({ theme }) {
  const isDark = theme === "dark";

  return (
    <aside
      className={`flex w-[18.5rem] shrink-0 flex-col border-r px-4 py-5 transition-colors duration-300 ${
        isDark
          ? "border-white/10 bg-white/5 text-[#9ca6c8]"
          : "border-[#edf0fb] bg-[#f9faff]/95 text-[#7f86a6]"
      }`}
    >
      <div
        className={`rounded-3xl px-5 py-6 shadow-[0_12px_35px_rgba(126,125,181,0.08)] ${
          isDark ? "bg-white/5" : "bg-white/85"
        }`}
      >
        <div className={`text-center text-[1.1rem] font-extrabold tracking-[0.18em] ${isDark ? "text-[#f4f7ff]" : "text-[#20244d]"}`}>
          PRAJWAL <span className="font-semibold tracking-[0.12em] text-[#7b86ad]">GPT</span>
        </div>
      </div>

      <button className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-[#5c4cff] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_28px_rgba(92,76,255,0.26)] transition hover:-translate-y-px">
        <FaPlus />
        New Chat
      </button>

      <nav className="mt-6 space-y-1.5 text-sm">
        <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 font-semibold ${isDark ? "bg-white/10 text-[#dbe2ff]" : "bg-[#eff1ff] text-[#352fff]"}`}>
          <BsStars />
          Recent Chats
        </div>
        <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${isDark ? "hover:bg-white/10 hover:text-[#f4f7ff]" : "hover:bg-white/75 hover:text-[#30355f]"}`}>
          <FaThLarge />
          Spring AI
        </div>
        <div className={`flex items-center gap-3 rounded-2xl px-4 py-3 ${isDark ? "hover:bg-white/10 hover:text-[#f4f7ff]" : "hover:bg-white/75 hover:text-[#30355f]"}`}>
          <FaHome />
          React
        </div>

        <div className="pt-2">
          <div className={`flex items-center gap-2 px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] ${isDark ? "text-[#7f8bb0]" : "text-[#c0c5d9]"}`}>
            <FaRegFileAlt />
            Other Pages <FaChevronDown className="ml-auto text-[0.65rem]" />
          </div>
          <div className="space-y-1 pl-8 text-sm">
            <div className={`py-1.5 ${isDark ? "hover:text-[#f4f7ff]" : "hover:text-[#30355f]"}`}>Groq</div>
            <div className={`py-1.5 ${isDark ? "hover:text-[#f4f7ff]" : "hover:text-[#30355f]"}`}>Prompt Page</div>
            <div className={`py-1.5 ${isDark ? "hover:text-[#f4f7ff]" : "hover:text-[#30355f]"}`}>Sign In</div>
          </div>
        </div>

        <div className="pt-2">
          <div className={`flex items-center gap-2 px-4 py-2 text-[0.78rem] font-semibold uppercase tracking-[0.16em] ${isDark ? "text-[#7f8bb0]" : "text-[#c0c5d9]"}`}>
            <FaLock />
            Admin Pages <FaChevronDown className="ml-auto text-[0.65rem]" />
          </div>
          <div className="space-y-1 pl-8 text-sm">
            <div className={`py-1.5 ${isDark ? "hover:text-[#f4f7ff]" : "hover:text-[#30355f]"}`}>Powered by Spring AI</div>
            <div className={`py-1.5 ${isDark ? "hover:text-[#f4f7ff]" : "hover:text-[#30355f]"}`}>Powered by Groq</div>
            <div className={`py-1.5 ${isDark ? "hover:text-[#f4f7ff]" : "hover:text-[#30355f]"}`}>Users Overview</div>
          </div>
        </div>
      </nav>

      <div className="mt-auto pt-6">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#a894ff] via-[#8a77ff] to-[#5e49ff] p-4 text-white shadow-[0_25px_45px_rgba(90,73,255,0.28)]">
          <div className="absolute inset-x-0 top-0 h-16 bg-white/15 blur-2xl" />
          <div className="relative flex items-center justify-center">
            <div className="grid h-14 w-14 place-items-center rounded-full border-[3px] border-white bg-[#7e69ff] shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#7e69ff]">
                <span className="text-xl font-black leading-none">◔</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}