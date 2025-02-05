import { createFileRoute } from "@tanstack/react-router";
import { deepseek } from "@ai-sdk/deepseek";
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

export const Route = createFileRoute("/deepseek/")({
  component: DeepseekPage,
});

function DeepseekPage() {
  const handleGenerate = async () => {
    const result = await generateText({
      model: anthropic("claude-3-5-sonnet-latest"),
      prompt: "Your prompt here",
    });
    return result;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Deepseek Demo</h1>
      <button
        onClick={handleGenerate}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Text
      </button>
    </div>
  );
}
