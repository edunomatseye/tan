import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/post/post')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/post/post"!</div>
}
