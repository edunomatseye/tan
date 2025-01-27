import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent() {
  return (
    <div className="p-2">
      <h3>About</h3>
      <hr className="my-6 w-full border-(--pattern-fg)" />
      <p className="mb-3 pt-10">Want to dig deeper into Tailwind?</p>
    </div>
  );
}
