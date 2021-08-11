import { smoothEdges } from "$lib/scripts/utility"

export function createMenuLinkProps({ href, target, title }) {
    return {
        href,
        target,
        title
    }
}

export function interpretPrimaryMenu(menuItems) {
    return smoothEdges(menuItems)
        .map(createMenuLinkProps)
        .map((props, index, array) => {
            const looks =
                index === array.length - 1
                    ? {
                          primary: true,
                          blob: true,
                          class: "text-center uppercase text-xs"
                      }
                    : {
                          class: "text-center uppercase font-bold text-xs"
                      }
            return { ...props, ...looks }
        })
}
