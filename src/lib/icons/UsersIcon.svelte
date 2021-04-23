<script>
    export let size = "100%"
    export let strokeWidth = 2
    let clazz = ""
    export { clazz as class }
    if (size !== "100%") {
        size =
            size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px"
    }
</script>

<svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width={strokeWidth}
    stroke-linecap="round"
    stroke-linejoin="round"
    class="{clazz} feather feather-users"
    ><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path
        d="M23 21v-2a4 4 0 0 0-3-3.87"
    /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg
>
