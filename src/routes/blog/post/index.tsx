import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/post/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/blog/post/"!</div>
}
