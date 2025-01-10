export const fetchPosts = async ({ pageIndex }: { pageIndex: number }) => {
  const res = await fetch(`/api/posts?page=${pageIndex}`);
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
};
