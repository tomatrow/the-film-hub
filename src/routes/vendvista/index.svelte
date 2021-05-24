<script lang="ts">
    import { assets } from "$app/paths"
    import { Footer } from "../../lib/app"
    import { logo } from "../../lib/common/data"
    import { links } from "../../lib/common/stores"
    import {
        Button,
        Form,
        Hero,
        Link,
        Field,
        Section,
        LogoSection,
        VideoSection,
        TestimonialSection
    } from "../../lib/components"
    import { defaults } from "../../lib/components/Field.svelte"
    import { onMount, onDestroy } from "svelte"

    onMount(async () => {
        $links = [{ href: "/filmvista", title: "Are you a film maker?" }]
    })
    onDestroy(() => ($links = []))

    let discounts = {}
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
    <Form formId="10363">
        <Field {...defaults.text} name="full_name">Name</Field>
        <Field {...defaults.text} name="business_name">Business Name</Field>
        <Field {...defaults.text} name="business_type">Business Type</Field>
        <Field {...defaults.text} name="email" type="email">Email</Field>
        <Field {...defaults.text} name="phone" type="tel">Phone</Field>
        <Field {...defaults.text} name="address">Address</Field>
        <div class="flex justify-center mt-auto mx-auto pt-6 w-full" slot="submit">
            <Button
                type="submit"
                class="mx-auto text-black text-center uppercase font-bold text-3xl"
                blob
                secondary
            >
                Submit
            </Button>
        </div>
    </Form>
</Hero>

<VideoSection
    ><h2 class="text-primary uppercase font-bold text-3xl">
        The Film Hub is a world Class Production facility is drawing the attention of Film makers
        from all over the world. Working alongside the City of Vista and the Chamber of Commerce The
        Film Friendly City incentive program was started.
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

<TestimonialSection />

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
</LogoSection>

<Section
    rootProps={{ class: "bg-primary" }}
    class="space-y-4 md:space-y-0 flex flex-col md:flex-row p-6 text-white"
>
    <div class="space-y-2 flex flex-col justify-around">
        <div class="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
            <div
                class="h-44 flex-shrink-0 w-full sm:w-5/12 sm:h-auto bg-center sm:bg-right bg-contain bg-no-repeat"
                style="background-image: url({logo})"
            />
            <h2 class="py-12 pr-4 uppercase font-bold text-5xl md:text-4xl">
                Become a featured vendor for free!
            </h2>
        </div>
        <p class="text-2xl">
            Think your location in Vista, Ca is perfect for someones upcoming film project? Want to
            help the exposure of your business by offering incoming film makers a discount? Join the
            “Film Friendly City” program as a featured vendor.
        </p>
    </div>
</Section>

<Section class="grid gap-4 grid-cols-1 lg:grid-cols-3">
    <Form>
        <h2 class="text-4xl">Food and Shops</h2>
        <Field type="file" accept="image/*">Upload Image</Field>
        <Field {...defaults.text}>Name of Shop</Field>
        <Field {...defaults.text}>Name of Restaurant/Catering Company</Field>
        <Field {...defaults.text}>Contact Person</Field>
        <Field {...defaults.text}>Phone</Field>
        <Field {...defaults.text}>Email</Field>
        <Field {...defaults.text}>Address</Field>
        <Field {...defaults.text}>Link to menu</Field>
        <div>
            <h4>Discount Offered</h4>
            <div class="flex flex-col">
                {#each [10, 15, 20, 25, 30] as value}
                    <Field
                        {...defaults.toggle}
                        type="radio"
                        bind:group={discounts["a"]}
                        name="discount"
                        {value}>{value}%</Field
                    >
                {/each}
            </div>
        </div>
        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Free Delivery</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center pb-4" }}
            >Catering</Field
        >
        <div class="flex justify-center mx-auto pt-6 w-full" slot="submit" style="margin-top:auto">
            <Button
                disabled
                type="submit"
                class="mx-auto text-black text-center uppercase font-bold text-3xl"
                blob
                secondary
            >
                Submit
            </Button>
        </div>
    </Form>

    <Form>
        <h2 class="text-4xl">Rental Gear</h2>

        <Field id="1" type="file" accept="image/*" name="rental_gear_image">Upload Image</Field>
        <Field class="border border-gray-400" rootProps={{ class: "flex flex-col" }}
            >Company Name</Field
        >
        <Field class="border border-gray-400" rootProps={{ class: "flex flex-col" }} type="tel"
            >Phone</Field
        >
        <Field class="border border-gray-400" rootProps={{ class: "flex flex-col" }}>Website</Field>

        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Camera Gear</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Grip/Lighting</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Audio Gear</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Sets and Props</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Transportation</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}>Other</Field
        >
        <div class="pb-4">
            <h4>Discount Offered</h4>
            <div class="flex flex-col">
                {#each [10, 15, 20, 25, 30] as value}
                    <Field
                        type="radio"
                        {...defaults.toggle}
                        bind:group={discounts["c"]}
                        name="discount"
                        {value}>{value}%</Field
                    >
                {/each}
            </div>
        </div>
        <div class="flex justify-center mx-auto pt-6 w-full" slot="submit" style="margin-top:auto">
            <Button
                type="submit"
                class="mx-auto text-black text-center uppercase font-bold text-3xl"
                blob
                secondary
            >
                Submit
            </Button>
        </div>
    </Form>

    <Form class="h-full">
        <h2 class="text-4xl">Cast and Crew</h2>
        <Field type="file" accept="image/*" name="cast_crew_image">Upload Image</Field>
        <Field class="border border-gray-400" rootProps={{ class: "flex flex-col" }}>Name</Field>
        <Field class="border border-gray-400" rootProps={{ class: "flex flex-col" }} type="tel"
            >Phone</Field
        >
        <Field class="border border-gray-400" rootProps={{ class: "flex flex-col" }}
            >IMDB Link</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}>Cast</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}>Crew</Field
        >
        <div>
            <h4>Discount Offered</h4>
            <div class="flex flex-col">
                {#each [10, 15, 20, 25, 30] as value}
                    <Field
                        {...defaults.toggle}
                        bind:group={discounts["b"]}
                        name="discount"
                        type="radio"
                        {value}>{value}%</Field
                    >
                {/each}
            </div>
        </div>
        <Field type="checkbox" {...defaults.toggle}>Executive Producer</Field>
        <Field type="checkbox" {...defaults.toggle}>Producer</Field>
        <Field type="checkbox" {...defaults.toggle}>Line Producer</Field>
        <Field type="checkbox" {...defaults.toggle}>Director</Field>
        <Field type="checkbox" {...defaults.toggle}>1st Assistant Director</Field>
        <Field type="checkbox" {...defaults.toggle}>Screenwriter</Field>
        <Field type="checkbox" {...defaults.toggle}>Script Supervisor</Field>

        <div class="flex justify-center mx-auto pt-6 w-full" slot="submit" style="margin-top:auto">
            <Button
                type="submit"
                class="mx-auto text-black text-center uppercase font-bold text-3xl"
                blob
                secondary
            >
                Submit
            </Button>
        </div>
    </Form>
</Section>

<Footer>
    <span>Interested in filming in Vista, CA?</span>
    <Link href="/filmvista" class="font-bold" plain>click here</Link>
</Footer>
