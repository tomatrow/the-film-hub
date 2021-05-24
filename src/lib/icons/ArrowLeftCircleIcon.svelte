<script>
    export let size = "100%"
    export let strokeWidth = 2
    export { clazz as class }
    let clazz = ""
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
    class="{clazz} feather feather-arrow-left-circle"
    ><circle cx="12" cy="12" r="10" /><polyline points="12 8 8 12 12 16" /><line
        x1="16"
        y1="12"
        x2="8"
        y2="12"
    /></svg
>
