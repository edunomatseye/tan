import { createFileRoute } from "@tanstack/react-router";
import { generateText } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import React, { useEffect } from "react";

export const Route = createFileRoute("/ai/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [text, setText] = React.useState("Hello world!");
  const model = anthropic("claude-3-5-haiku-latest");

  const runAi = async () => {
    const { text: genText } = await generateText({
      model,
      prompt: "solve advent of code 2024 day 8 in typescript",
    });
    setText(genText);
  };

  return (
    <>
      <div>Hello "/ai/"!</div>
      {text}
      <>
        <br />
        <button onClick={runAi}>Run AI</button>
      </>
    </>
  );
}
