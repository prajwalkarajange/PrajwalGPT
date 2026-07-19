import { TypeAnimation } from "react-type-animation";

export default function TypingLoader() {
	return (
		<div className="flex items-center gap-3 px-1 text-sm text-[#7b84a8]">
			<div className="flex gap-1.5">
				<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#8a77ff] [animation-delay:-200ms]" />
				<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#b79cff] [animation-delay:-100ms]" />
				<span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#e0c8ff]" />
			</div>
			<TypeAnimation
				sequence={[
					"Your Personal AI Assistant",
					1800,
					"Powered by Spring AI",
					1800,
					"Powered by Groq",
					1800,
				]}
				speed={45}
				repeat={Infinity}
				className="text-sm font-medium text-[#7b84a8]"
			/>
		</div>
	);
}
