import { writable } from "svelte/store"

interface NavLink {
    title: string
    href: string
}

export const links = writable<NavLink[]>([])
