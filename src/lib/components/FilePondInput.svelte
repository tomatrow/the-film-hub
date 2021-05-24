<svelte:options accessors />

<script lang="ts">
    import type { FilePond } from "filepond"
    import { onDestroy, afterUpdate } from "svelte"
    import { noop } from "svelte/internal"
    import { create, supported } from "filepond"

    export const isSupported = supported()

    let root: HTMLInputElement
    let instance: FilePond

    let clazz: string = undefined
    export { clazz as class }

    export let id: string = undefined
    export let name: string = undefined
    export let required: boolean = undefined
    export let multiple: boolean = undefined
    export let capture: "user" | "environment" = undefined
    export let accept: string = undefined

    // functions to call on this component (if it's initialized)
    const _noop = noop as unknown
    export let addFile = _noop as typeof instance.addFile
    export let addFiles = _noop as typeof instance.addFiles
    export let browse = _noop as typeof instance.browse
    export let getFile = _noop as typeof instance.getFile
    export let getFiles = _noop as typeof instance.getFiles
    export let moveFile = _noop as typeof instance.moveFile
    export let prepareFile = _noop as typeof instance.prepareFile
    export let prepareFiles = _noop as typeof instance.prepareFiles
    export let processFile = _noop as typeof instance.processFile
    export let processFiles = _noop as typeof instance.processFiles
    export let removeFile = _noop as typeof instance.removeFile
    export let removeFiles = _noop as typeof instance.removeFiles
    export let sort = _noop as typeof instance.sort

    // this lifecycle method will handle updating and creating the FilePond instance
    afterUpdate(() => {
        if (!isSupported) return
        const props = Object.fromEntries(
            Object.entries($$props)
                .filter(([key]) => key !== "class")
                .map(([key, value]) => {
                    let newKey = null
                    switch (key) {
                        case "capture":
                            newKey = "captureMethod"
                            break
                        case "multiple":
                            newKey = "allowMultiple"
                            break
                        case "accept":
                            newKey = "acceptedFileTypes"
                            break
                    }
                    return [newKey ?? key, value]
                })
        )

        if (!instance) {
            // create instance
            instance = create(root, { ...props, credits: false })

            // Reference pond methods to FilePond component instance
            addFile = instance.addFile
            addFiles = instance.addFiles
            removeFile = instance.removeFile
            removeFiles = instance.removeFiles
            browse = instance.browse
            getFile = instance.getFile
            getFiles = instance.getFiles
            moveFile = instance.moveFile
            prepareFile = instance.prepareFile
            prepareFiles = instance.prepareFiles
            processFile = instance.processFile
            processFiles = instance.processFiles
            removeFile = instance.removeFile
            removeFiles = instance.removeFiles
            sort = instance.sort
        } else {
            instance.setOptions(props)
        }
    })

    // cleans up the component
    onDestroy(() => {
        if (!instance) return
        instance.destroy()
        instance = undefined
    })
</script>

<input
    type="file"
    bind:this={root}
    class={clazz}
    {id}
    {name}
    {required}
    {accept}
    {multiple}
    {capture}
/>
