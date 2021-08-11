<script context="module">
    import { registerPlugin } from "filepond"
    import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css"
    import "filepond/dist/filepond.min.css"
    import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type"
    import FilePondPluginImagePreview from "filepond-plugin-image-preview"
    registerPlugin(FilePondPluginImagePreview)
    registerPlugin(FilePondPluginFileValidateType)

    export const defaults = {
        text: {
            class: "border border-gray-400",
            rootProps: { class: "flex flex-col" }
        },
        toggle: {
            class: "mr-2 flex-shrink-0",
            rootProps: { class: "flex flex-row-reverse justify-end items-center" }
        },
        textarea: {
            class: "border border-gray-400 min-h-[3rem]",
            rootProps: { class: "flex flex-col" }
        }
    }
</script>

<script lang="ts">
    import FilePondInput from "./FilePondInput.svelte"
    import { autoResizeTextArea } from "$lib/common/actions"

    export let type: string = undefined
    export let checked: boolean = undefined
    export let group: any = undefined
    export let rootProps = { class: undefined }
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label
    {...type === "file"
        ? { ...rootProps, class: `filepond--wrapper ${rootProps?.class ?? ""}` }
        : rootProps}
>
    <slot />
    {#if type === "textarea"}
        <textarea use:autoResizeTextArea {...$$restProps} />
    {:else if type === "checkbox"}
        <!-- <input bind:group bind:checked type="checkbox" {...$$restProps} /> -->
        <input bind:checked type="checkbox" {...$$restProps} />
    {:else if type === "radio"}
        <input bind:group type="radio" {...$$restProps} />
    {:else if type === "file"}
        <!-- <input type="file" {...$$restProps} /> -->
        <FilePondInput {...$$restProps} />
    {:else}
        <input {type} {...$$restProps} />
    {/if}
</label>
