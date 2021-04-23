<script lang="ts">
    import { assets } from "$app/paths"
    import Form from "./_Form.svelte"
    import { Footer } from "../../lib/app"
    import { links } from "../../lib/common/stores"
    import {
        Comment,
        Hero,
        Button,
        Field,
        Link,
        Section,
        LogoSection,
        VideoSection,
        FormSection
    } from "../../lib/components"
    import { logo, comments, locations, backgrounds } from "../../lib/common/data"
    import { onMount, onDestroy } from "svelte"

    let Carousel
    onMount(async () => {
        $links = [{ href: "/filmvista", title: "Are you a filmer?" }]
        Carousel = (await import("svelte-carousel/src/components/Carousel/Carousel.svelte")).default
    })
    onDestroy(() => ($links = []))
</script>

<svelte:head>
    <title>Film Friendly Vista Vendor</title>
</svelte:head>

<Hero>
    <svelte:fragment slot="title">
        Become a featured vendor for film makers coming to Vista
    </svelte:fragment>
    <svelte:fragment slot="blurb"
        >Increase your businesses exposure as more and more film makers are coming to our beautiful
        city.</svelte:fragment
    >
    <Form />
</Hero>

<VideoSection
    ><h2 class="text-primary uppercase font-bold text-3xl">
        The film hub is a world class production facility that attracts “x” amount of film makers
        from “x”. In partnership with the vista chamber of commerce the “film friendly city”
        incentive program was started.
    </h2></VideoSection
>

<LogoSection
    class="flex flex-col justify-center"
    bgImage={assets + "/assets/gallery/french-farm-house-1-ext-day.webp"}
>
    <h2 class="text-primary uppercase font-bold text-3xl">About the Film Friendly City</h2>
    <p class="text-secondary text-2xl">
        “Film Friendly City” is a program to provide those incentives. The program will offer TV and
        Film producers information on local restaurants, shops, accommodations cast and crews,
        filming locations, and access to a list of participating venders who would like to provide
        discounts on their goods and/or services. Attracting this industry will bring more foot
        traffic to the downtown area.
    </p>
</LogoSection>

<Section rootProps={{ class: "bg-light" }} class="space-y-4 pt-32 pb-20">
    <h2 class="text-center uppercase font-bold text-3xl">
        What Film Makers Are Saying About Vista
    </h2>
    {#if Carousel}
        <Carousel>
            {#each comments as comment}
                <div class="flex justify-center">
                    <Comment {...comment} />
                </div>
            {/each}
        </Carousel>
    {/if}
</Section>

<LogoSection
    rootProps={{ class: "md:flex-row-reverse" }}
    hideLogo
    class="space-y-4 flex items-start flex-col justify-center"
    bgImage={assets + "/assets/gallery/vista-sign-ext-day.webp"}
>
    <h2 class="text-primary uppercase font-bold text-3xl">
        Help the city grow its film industry presence while exposing your business
    </h2>

    <p class="text-secondary text-xl">
        As a participating vendor, your information will be distributed to film makers interested in
        filming in Vista, giving you an increase in exposure for your goods and services. A
        storefront window Sticker will indicate all participating vendors in the downtown area.
    </p>

    <Link secondary blob class="uppercase" href="/">Learn More</Link>
</LogoSection>

<FormSection>
    <svelte:fragment slot="title">Become a featured vendor for free!</svelte:fragment>
    <svelte:fragment slot="blurb"
        >Think your location in Vista, Ca is perfect for someones upcoming film project? Want to
        help the exposure of your business by offering incoming film makers a discount? Contact Us
        Today and join the “Film Friendly City” program as a featured vendor.</svelte:fragment
    >
    <Form />
</FormSection>

<Footer>
    <span>Interested in filming in Vista, CA?</span>
    <Link href="/filmvista" class="font-bold" plain>click here</Link>
</Footer>
