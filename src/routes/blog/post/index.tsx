import {
  createFileRoute,
  getRouteApi,
  useParams,
  useSearch,
} from "@tanstack/react-router";
import { z } from "zod";

const productSearchSchema = z.object({
  page: z.number().catch(1),
  filter: z.string().catch(""),
  sort: z.enum(["newest", "oldest", "price"]).catch("newest"),
});

export const Route = createFileRoute("/blog/post/")({
  component: RouteComponent,
  validateSearch: productSearchSchema,
});

function RouteComponent() {
  const routeApi = getRouteApi("/blog/post/");
  const { id } = useParams({ strict: false });
  const search = useSearch({ strict: false });
  return (
    <>
      <span>{search.page}</span>
      <span>{routeApi.id}</span>
      <div>Hello "/blog/post/"!</div>
    </>
  );
}
