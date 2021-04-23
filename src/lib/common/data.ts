import { assets } from "$app/paths"

const assetRoot = assets

export const logo = assetRoot + "/assets/logo.jpg"
export const hero = assetRoot + "/assets/hero.mp4"
export const filmHubLogo = {
    white: assetRoot + "/assets/film-hub-logo-white.png",
    black: assetRoot + "/assets/film-hub-logo-black.png",
    color: assetRoot + "/assets/film-hub-logo-color.png"
}

export const logos = [
    { title: "Food", src: "/assets/logos/food.png" },
    { title: "Accommodation", src: "/assets/logos/bed.png" },
    { title: "Cast and Crew", src: "/assets/logos/people.png" },
    { title: "Equipment", src: "/assets/logos/equipment.png" },
    { title: "Locations", src: "/assets/logos/house.png" }
].map(asset => {
    asset.src = assetRoot + asset.src
    return asset
})

export let comments = [
    {
        src: "/assets/headshots/shaun-f.webp",
        body:
            "I feel like the creative community can be very isolating, that’s why its so beautiful having a space where the vision is community, the vision is inspiration, the vision is to collaborate. Therefore I want to bring in as many people as I can to have the opportunity to cultivate and create something that hasn’t been made before.",
        author: "Shaun Frederickson",
        title: "Firm Grip Photography"
    },
    {
        src: "/assets/headshots/jon-s.webp",
        body:
            "I spent the last year working at my home office, and to be honest, it got a little lonely. Working here has been great because it’s such a great community. Im always running into people that do things similar to what I do but not exactly what I do and that overlap is really nice. So getting to rub shoulders with people that are doing creative work is really inspiring.",
        author: "Jon Steingard",
        title: "Steingard Creative, Inc"
    },
    {
        src: "/assets/headshots/joe-l2.webp",
        body:
            "My home town of Vista here now has this amazing place where like them in many ways community is created. At the Nammshow its about bringing people together to collaborate to work together from all different cultures around the world and I think what we have now here in Vista with The Film Hub is the same thing, bringing creators together, bringing people together to collaborate and work together to create wonderful outcomes like we just did with our NAMM Board meeting in the studio today.",
        author: "Joe Lamond",
        title: "NAMM Show CEO"
    },
    {
        src: "/assets/headshots/aulio-i.webp",
        body:
            "But for me what I love the most about this place is how welcome I felt as soon as I walked through the door. The owners, the staff, all want you to feel welcome and part of the family. I know that is kind of cliche, but the feeling is awesome.",
        author: "Aulio Ivan",
        title: "Film Producer"
    },
    {
        src: "/assets/headshots/celia-a.webp",
        body:
            "Having an office and creating content from the Film Hub has increased the quality of my work. I have been able to use professional stages and equipment for photography and video work. It’s been incredible to have other creatives professionals to collaborate with and there is so much talent under one roof. The management is so supportive of every request I have had, making it easy to focus on what I am best at, being creative.",
        author: "Celia Young",
        title: "Designed Images Owner"
    }
].map(asset => {
    asset.src = assetRoot + asset.src
    return asset
})

export const locations = [
    { title: "The Water Park", image: "/assets/locations/waterpark.webp" },
    { title: "Alta Vista Gardens", image: "/assets/locations/garden.webp" },
    { title: "Downtown Streets", image: "/assets/locations/street.webp" },
    { title: "Moonlight Theatre", image: "/assets/locations/moonlight.webp" },
    { title: "Rancho Bueno Vista Adobe", image: "/assets/locations/adobe.webp" },
    { title: "Skate Parks", image: "/assets/locations/skate.webp" }
].map(asset => {
    asset.image = assetRoot + asset.image
    return asset
})

export const backgrounds = {
    about: assetRoot + "/assets/backgrounds/about-us.webp"
}

export const gallery = [
    "/assets/gallery/alans-alley-ext-night.webp",
    "/assets/gallery/apts-1-ext-day.webp",
    "/assets/gallery/arid-road-ext-day.webp",
    "/assets/gallery/avo-1-ext-night.webp",
    "/assets/gallery/avo-3-ext-day.webp",
    "/assets/gallery/bank-ext-day.webp",
    "/assets/gallery/barrel-and-stave-ext-night.webp",
    "/assets/gallery/broadway-theater-ext-day.webp",
    "/assets/gallery/community-church-2-ext-day.webp",
    "/assets/gallery/community-church-4-ext-day.webp",
    "/assets/gallery/countryside-2-ext-day.webp",
    "/assets/gallery/countryside-3-ext-day.webp",
    "/assets/gallery/countryside-4-ext-day.webp",
    "/assets/gallery/curbside-ext-day.webp",
    "/assets/gallery/desert-area-ext-day.webp",
    "/assets/gallery/doghaus-ext-night.webp",
    "/assets/gallery/filmhub-ext-day.webp",
    "/assets/gallery/flower-lady-ext-day.webp",
    "/assets/gallery/french-farm-house-1-ext-day.webp",
    "/assets/gallery/french-farm-house-2-ext-day.webp",
    "/assets/gallery/french-farm-house-3-ext-day.webp",
    "/assets/gallery/french-farm-house-4-ext-day.webp",
    "/assets/gallery/hanes-alley-ext-day.webp",
    "/assets/gallery/moonlight-aerial-ext-day.webp",
    "/assets/gallery/moonlight-ext-day.webp",
    "/assets/gallery/old-city-sign-ext-day.webp",
    "/assets/gallery/pepper-tree-ext-day.webp",
    "/assets/gallery/pigs-fly-1-int-day.webp",
    "/assets/gallery/pigs-fly-3-int-day.webp",
    "/assets/gallery/preschool-ext-day.webp",
    "/assets/gallery/rainforest-ext-day.webp",
    "/assets/gallery/refind-1-ext-day.webp",
    "/assets/gallery/rylan-1-ext-day.webp",
    "/assets/gallery/rylan-2-ext-day.webp",
    "/assets/gallery/shaks-ext-night.webp",
    "/assets/gallery/sidewalk-1-ext-day.webp",
    "/assets/gallery/sidewalk-2-ext-day.webp",
    "/assets/gallery/sidewalk-3-ext-day.webp",
    "/assets/gallery/sidewalk-7-ext-day.webp",
    "/assets/gallery/sidewalk-8-ext-day.webp",
    "/assets/gallery/sidewalk-9-ext-day.webp",
    "/assets/gallery/sidewalk-10-ext-day.webp",
    "/assets/gallery/sidewalk-11-ext-night.webp",
    "/assets/gallery/sidewalk-12-ext-day.webp",
    "/assets/gallery/street-1-ext-day.webp",
    "/assets/gallery/street-3-ext-day.webp",
    "/assets/gallery/street-4-ext-day.webp",
    "/assets/gallery/street-5-ext-day.webp",
    "/assets/gallery/street-7-ext-day.webp",
    "/assets/gallery/street-art-1-ext-night.webp",
    "/assets/gallery/street-art-2-ext-day.webp",
    "/assets/gallery/street-art-3-ext-day.webp",
    "/assets/gallery/street-art-5-ext-day.webp",
    "/assets/gallery/street-art-7-ext-day.webp",
    "/assets/gallery/street-art-8-ext-day.webp",
    "/assets/gallery/street-art-9-ext-day.webp",
    "/assets/gallery/street-art-10-ext-night.webp",
    "/assets/gallery/street-art-12-ext-night.webp",
    "/assets/gallery/street-musicians-ext-day.webp",
    "/assets/gallery/tin-gypsy-ext-day.webp",
    "/assets/gallery/tropical-fish-ext-day.webp",
    "/assets/gallery/urban-barn-ext-night.webp",
    "/assets/gallery/village-clock-ext-night.webp",
    "/assets/gallery/vista-adobe-1-ext-day.webp",
    "/assets/gallery/vista-adobe-2-ext-day.webp",
    "/assets/gallery/vista-mountains-ext-day.webp",
    "/assets/gallery/vista-sign-ext-day.webp",
    "/assets/gallery/water-park-2-ext-day.webp",
    "/assets/gallery/western-facade-ext-day.webp",
    "/assets/gallery/when-pigs-fly-ext-night.webp",
    "/assets/gallery/yellow-deli-1-ext-day.webp",
    "/assets/gallery/yellow-deli-2-ext-night.webp",
    "/assets/gallery/yellow-deli-3-ext-day.webp"
].map(asset => assetRoot + asset)
