import type { Load, LoadInput } from "@sveltejs/kit"
import { query } from "$lib/scripts/apollo"

export const normalizePath = (path: string) =>
    path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path

export interface Resource {
    __typename: string
    id: string
    uri: string
}

export enum ResourceTypes {
    Tag = "Tag",
    Class = "Class",
    Category = "Category",
    Page = "Page"
}

type AnyResource = Resource & Record<string, any>

export function matchResourceMiddleware<R extends Resource = AnyResource>(
    { session, page }: LoadInput,
    filter: (resource: R) => boolean = () => true
) {
    console.log(`Finding resource for path ${page.path}`)
    console.log(`Resources`, session.resources)

    const resource = session.resources[normalizePath(page.path)]

    if (!resource)
        return {
            status: 404,
            error: `No resource matches path: '${page.path}'`
        }

    console.log(`Resource matches path ${page.path}`, resource)

    if (!filter(resource)) {
        console.log("Resource did not match filter")
        return {}
    }

    session.resource = resource
}

export function previewVariables({ page }: LoadInput) {
    return {
        isPreview: page.query.has("preview"),
        nonce: page.query.get("nonce")
    }
}

export function loadResource<R extends Resource = AnyResource>(
    graphqlQueryOrFunction: string | ((resource: R, input: LoadInput) => string),
    filter?: (resource: R) => boolean,
    getVariables: (resource: R, input: LoadInput) => object = ({ id }) => ({ id })
): Load {
    return async (input: LoadInput) => {
        const output = matchResourceMiddleware(input, filter)
        if (output) return output

        const { resource } = input.session

        try {
            const graphqlQuery =
                typeof graphqlQueryOrFunction === "string"
                    ? graphqlQueryOrFunction
                    : graphqlQueryOrFunction(resource, input)

            console.log("Running query", graphqlQuery)

            const { data } = await query(graphqlQuery, getVariables(resource, input))

            console.log("Fetched data", data)

            return {
                status: 200,
                props: data
            }
        } catch (error) {
            console.error(error)
            return {
                status: 500,
                error: JSON.stringify(error)
            }
        }
    }
}

export function loadPage(templateName: string, graphqlQuery: string) {
    if (!(templateName && graphqlQuery)) throw new Error("Need both templateName and graphqlQuery")
    console.log("Running page query for template", templateName)
    return loadResource(
        graphqlQuery,
        resource => {
            const isPage = resource.__typename === ResourceTypes.Page
            const isMatchingTemplate = resource.template.templateName === templateName
            console.log({
                isPage,
                isMatchingTemplate,
                resourceTemplateName: resource.template.templateName,
                templateName
            })
            return isPage && isMatchingTemplate
        },
        ({ id }, input) => ({ id, ...previewVariables(input) })
    )
}
