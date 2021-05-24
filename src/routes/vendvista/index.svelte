<script lang="ts">
    import { assets } from "$app/paths"
    import { Footer } from "../../lib/app"
    import { logo } from "../../lib/common/data"
    import { links } from "../../lib/common/stores"
    import DiscountSection from "../../lib/components/DiscountSection.svelte"
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

<DiscountSection />

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
    <Form formId="10405">
        <h2 class="text-4xl">Food and Shops</h2>
        <Field name="image" type="file" accept="image/*">Upload Image</Field>
        <Field {...defaults.text} name="company_name" required>Company Name</Field>
        <Field {...defaults.text} name="contact_person" required>Contact Person</Field>
        <Field {...defaults.text} name="phone" required>Phone</Field>
        <Field {...defaults.text} name="email" required>Email</Field>
        <Field {...defaults.text} name="address" required>Address</Field>
        <Field {...defaults.text} name="link_to_menu" required>Link to menu</Field>
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
            name="freee_delivery"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Free Delivery</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            name="catering"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center pb-4" }}
            >Catering</Field
        >
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

    <Form formId="10406">
        <h2 class="text-4xl">Rental Gear</h2>

        <Field id="1" type="file" accept="image/*" name="rental_gear_image">Upload Image</Field>
        <Field
            name="company_name"
            class="border border-gray-400"
            rootProps={{ class: "flex flex-col" }}>Company Name</Field
        >
        <Field
            name="phone"
            class="border border-gray-400"
            rootProps={{ class: "flex flex-col" }}
            type="tel">Phone</Field
        >
        <Field name="website" class="border border-gray-400" rootProps={{ class: "flex flex-col" }}
            >Website</Field
        >

        <Field
            type="checkbox"
            class="mr-2"
            name="camera_gear"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Camera Gear</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            name="grip_lighting"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Grip/Lighting</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            name="audio_gear"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Audio Gear</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            name="set_and_props"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Sets and Props</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            name="transportation"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}
            >Transportation</Field
        >
        <Field
            type="checkbox"
            class="mr-2"
            name="other"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}>Other</Field
        >
        <div class="pb-4">
            <h4>Discount Offered</h4>
            <div class="flex flex-col">
                {#each [10, 15, 20, 25, 30] as value}
                    <Field name="discount_{value}" type="checkbox" {...defaults.toggle} {value}
                        >{value}%</Field
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

    <Form formId="10407" class="h-full">
        <h2 class="text-4xl">Cast and Crew</h2>
        <Field type="file" accept="image/*" name="cast_crew_image">Upload Image</Field>
        <Field
            name="full_name"
            required
            class="border border-gray-400"
            rootProps={{ class: "flex flex-col" }}>Name</Field
        >
        <Field
            required
            name="phone"
            class="border border-gray-400"
            rootProps={{ class: "flex flex-col" }}
            type="tel">Phone</Field
        >
        <Field
            name="imdb_or_website"
            required
            class="border border-gray-400"
            rootProps={{ class: "flex flex-col" }}>IMDB Link or Website Link</Field
        >
        <Field
            name="cast"
            type="checkbox"
            class="mr-2"
            rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}>Cast</Field
        >
        <Field
            name="crew"
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

        <Field name="producer" type="checkbox" {...defaults.toggle}>Producer</Field>
        <Field name="director" type="checkbox" {...defaults.toggle}>Director</Field>
        <Field name="screen_writer" type="checkbox" {...defaults.toggle}>Screen Writer</Field>
        <Field name="production_script_department" type="checkbox" {...defaults.toggle}
            >Production & Script Department</Field
        >
        <Field name="casting_cast" type="checkbox" {...defaults.toggle}>Casting/Cast</Field>
        <Field name="location-department" type="checkbox" {...defaults.toggle}
            >Location Department</Field
        >
        <Field name="camera_department" type="checkbox" {...defaults.toggle}
            >Camera Department</Field
        >
        <Field name="sound_department" type="checkbox" {...defaults.toggle}>Sound Department</Field>
        <Field name="grip_electric_department" type="checkbox" {...defaults.toggle}
            >Grip/Electric Department</Field
        >
        <Field name="art_department" type="checkbox" {...defaults.toggle}>Art Department</Field>
        <Field name="hair_make_up_department" type="checkbox" {...defaults.toggle}
            >Hair & Make-up Department</Field
        >
        <Field name="wardrobe_department" type="checkbox" {...defaults.toggle}
            >Wardrobe Department</Field
        >
        <Field name="post_production" type="checkbox" {...defaults.toggle}>Post Production</Field>
        <Field name="marketing_and_promotions" type="checkbox" {...defaults.toggle}
            >Marketing and Promotions</Field
        >
        <Field name="legal_accounting_financial" type="checkbox" {...defaults.toggle}
            >Legal, Accounting, Financial</Field
        >
        <Field name="distribution" type="checkbox" {...defaults.toggle}>Distribution</Field>
        <Field name="on_set_photographer_videographer" type="checkbox" {...defaults.toggle}
            >On Set Photographer&#8203;/Videographer</Field
        >
        <Field name="craft_services" type="checkbox" {...defaults.toggle}>Craft Services</Field>
        <Field name="live_stream" type="checkbox" {...defaults.toggle}>Live Stream</Field>

        <Field name="other" class="border border-gray-400" rootProps={{ class: "flex flex-col" }}
            >Other</Field
        >
        <Field
            name="specific_service"
            class="mb-2 border border-gray-400"
            rootProps={{ class: "flex flex-col" }}>SPECIFIC SERVICE RENDERED</Field
        >

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
