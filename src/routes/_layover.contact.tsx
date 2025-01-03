import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layover/contact')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layover/contact"!</div>
}
