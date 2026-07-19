import ReactMarkdown from "react-markdown";

export default function Message({ message }) {
	const isUser = message.role === "user";

	return (
		<div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
			<div
				className={`max-w-[85%] rounded-[1.35rem] px-4 py-3 text-sm leading-6 shadow-[0_10px_25px_rgba(92,87,156,0.08)] sm:max-w-[75%] ${
					isUser
						? "bg-linear-to-br from-[#6c58ff] to-[#8f75ff] text-white"
						: "border border-[#edf0fb] bg-white text-[#44506f]"
				}`}
			>
				{isUser ? (
					<p className="whitespace-pre-wrap">{message.content}</p>
				) : (
					<ReactMarkdown>{message.content}</ReactMarkdown>
				)}
			</div>
		</div>
	);
}
