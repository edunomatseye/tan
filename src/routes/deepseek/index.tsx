import { createFileRoute } from "@tanstack/react-router";
import { deepseek } from "@ai-sdk/deepseek";
import { anthropic } from "@ai-sdk/anthropic";
import { generateText } from "ai";

export const Route = createFileRoute("/deepseek/")({
  component: RouteComponent,
});

async function RouteComponent() {
  const result = await generateText({
    model: anthropic("claude-3-5-sonnet-latest"),
    prompt: "Your prompt here",
  });
  return (
    <div>
      Hello "/deepseek/"! {JSON.stringify(result.experimental_providerMetadata)}
    </div>
  );
}
