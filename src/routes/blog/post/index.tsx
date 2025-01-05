import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/post/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = useParams({ strict: false });
  return (
    <>
      <span>{}</span>
      <div>Hello "/blog/post/"!</div>
    </>
  );
}
