import { ResourcesPsuedoFragment } from "$lib/queries/resources"
import { smoothEdges } from "$lib/scripts/utility"
import { normalizePath } from "$lib/scripts/router"
import { query, graphql } from "$lib/scripts/apollo"
import type { Handle, GetSession, Request } from "@sveltejs/kit"

async function coreQueryMiddleware(request: Request) {
    const q = graphql`
        query SessionQuery {
            ${ResourcesPsuedoFragment}
        }
    `

    try {
        const { data } = await query(q)
        request.locals.coreGraph = data
        console.log({ data })
    } catch (error) {
        console.error(error)
    }
}

export const handle: Handle = async ({ request, resolve }) => {
    console.log(`request.path: ${request.path}`)
    await coreQueryMiddleware(request)

    const response = await resolve(request)

    return response
}

export const getSession: GetSession = async ({ locals }) => {
    return {
        resources: Object.fromEntries(
            [...smoothEdges(locals.coreGraph?.pages ?? [])].map(
                // @ts-ignore
                resource => [normalizePath(resource.href), resource]
            )
        )
    }
}
