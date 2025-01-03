import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_layover")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div>Hello "/_layover"!</div>
      <Outlet />
    </>
  );
}
