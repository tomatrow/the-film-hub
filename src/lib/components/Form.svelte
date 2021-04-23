<script>
    import ContactForm7 from "./ContactForm7.svelte"
</script>

<ContactForm7
    origin={import.meta.env.VITE_CF7_ORIGIN}
    {...$$restProps}
    class="text-primary divide-y divide-black space-y-12 flex flex-col flex-shrink-0 p-4 py-6 h-full md:w-1/3 bg-white uppercase"
>
    <div class="space-y-4 flex flex-col font-bold text-2xl">
        <slot />
    </div>
    <slot name="submit" slot="submit" />
    <span class="text-primary text-center" slot="success" let:message>
        {message}
    </span>
</ContactForm7>
