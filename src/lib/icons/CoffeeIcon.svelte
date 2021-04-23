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
    class="{clazz} feather feather-coffee"
    ><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path
        d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"
    /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line
        x1="14"
        y1="1"
        x2="14"
        y2="4"
    /></svg
>
