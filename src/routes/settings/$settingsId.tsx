import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/$settingsId")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/settings/$settingsId"!</div>
      <div>Settings ID: {Route.useParams().settingsId}</div>
    </>
  );
}
