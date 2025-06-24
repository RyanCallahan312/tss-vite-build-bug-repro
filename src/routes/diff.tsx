import { createFileRoute } from '@tanstack/react-router'
import {Page} from "@/components/rdvc-page"

export const Route = createFileRoute('/diff')({
  component: RouteComponent,
})

function RouteComponent() {
	return <Page />;
}
