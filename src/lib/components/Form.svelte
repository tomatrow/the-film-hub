<script>
    import ContactForm7 from "./ContactForm7.svelte"
    export { clazz as class }
    let clazz = ""
    console.log({ origin: import.meta.env.VITE_CF7_ORIGIN })
</script>

<ContactForm7
    origin={import.meta.env.VITE_CF7_ORIGIN}
    {...$$restProps}
    class="{clazz} text-primary divide-y divide-black space-y-12 flex flex-col flex-shrink-0 p-4 py-6 h-full bg-white uppercase"
>
    <div class="space-y-4 flex flex-col font-bold text-2xl">
        <slot />
    </div>
    <slot name="submit" slot="submit" />
    <span class="text-primary text-center" slot="success" let:message>
        {message}
    </span>
</ContactForm7>
