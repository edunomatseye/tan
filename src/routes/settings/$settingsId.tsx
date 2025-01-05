import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/settings/$settingsId")({
  component: RouteComponent,
});

function RouteComponent() {
  const { settingsId } = useParams({ strict: false });
  return (
    <>
      <span>From : {settingsId}</span>
      <div>Hello "/settings/$settingsId"!</div>
      <div>Settings ID: {Route.useParams().settingsId}</div>
    </>
  );
}
