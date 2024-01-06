import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env["VITE_CHATGPT_API_K"],
  dangerouslyAllowBrowser: true,
});

export default openai;
