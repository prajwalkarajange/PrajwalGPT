import axios from "axios";

const BASE = import.meta.env.VITE_CHAT_API_URL || "http://localhost:8080/api";

function unwrapResponse(data) {
	if (typeof data === "string") {
		return data;
	}

	return data?.reply || data?.message || data?.content || data?.answer || "";
}

export async function askAI(conversationId, message) {
	const response = await axios.get(`${BASE}/${conversationId}/${encodeURIComponent(message)}`);
	return unwrapResponse(response.data);
}
