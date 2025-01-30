import { createFileRoute } from "@tanstack/react-router";
import { deepseek } from "@ai-sdk/deepseek";
import { generateText } from "ai";

export const Route = createFileRoute("/deepseek/")({
  component: RouteComponent,
});

async function RouteComponent() {
  const result = await generateText({
    model: deepseek("deepseek-chat"),
    prompt: "Your prompt here",
  });
  return (
    <div>
      Hello "/deepseek/"! {JSON.stringify(result.experimental_providerMetadata)}
    </div>
  );
}
