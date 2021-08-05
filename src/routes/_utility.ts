import { smoothEdges } from "$lib/scripts/utility"

export function createMenuLinkProps({ href, target, title, landingPageMenuItemFields }) {
    return {
        href,
        target,
        title,
        fancy: !!landingPageMenuItemFields.fancy
    }
}

export function interpretPrimaryMenu(menuItems) {
    return smoothEdges(menuItems)
        .map(createMenuLinkProps)
        .map(props => {
            const looks = props.fancy
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
