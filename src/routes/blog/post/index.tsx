import { fetchPosts } from "@/utils/posts";
import {
  createFileRoute,
  getRouteApi,
  useParams,
  useSearch,
} from "@tanstack/react-router";
import { z } from "zod";

const productSearchSchema = z.object({
  page: z.number().catch(1).optional(),
  filter: z.string().catch("").optional(),
  sort: z.enum(["newest", "oldest", "price"]).catch("newest").optional(),
  offset: z.string().optional(),
  limit: z.number().optional(),
  pageIndex: z.number().optional(),
  sortBy: z.string().optional(),
  desc: z.boolean().optional(),
});

export const Route = createFileRoute("/blog/post/")({
  component: RouteComponent,
  validateSearch: productSearchSchema,
  loaderDeps: ({ search: { offset, limit, pageIndex } }) => ({
    offset,
    limit,
    pageIndex,
  }),
  loader: ({ deps: { pageIndex } }) =>
    pageIndex &&
    fetchPosts({
      pageIndex,
    }),
});

function RouteComponent() {
  const routeApi = getRouteApi("/blog/post/");
  const search = useSearch({ strict: false });
  return (
    <>
      <span>{search.page}</span>
      <span>{routeApi.id}</span>
      <div>Hello "/blog/post/"!</div>
    </>
  );
}
