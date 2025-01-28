import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/deepseek/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/deepseek/"!</div>
}
