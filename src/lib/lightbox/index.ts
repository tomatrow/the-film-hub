import type { LuminousGallery, GalleryActionConfig } from "luminous-svelte"
import "luminous-lightbox/dist/luminous-basic.css"
import "./lightbox.scss"

const closeTrigger = "close-lightbox"

function createOnClick(instance: LuminousGallery) {
    return (event: MouseEvent) => {
        event.stopPropagation()
        const target = event.target as HTMLElement
        if (target.matches(".lum-img")) return

        const thumb: HTMLElement = target.matches(".lum-thumb")
            ? target
            : target.closest(".lum-thumb")!
        if (!thumb) {
            target.dispatchEvent(new CustomEvent(closeTrigger, { bubbles: true }))
            return
        }

        const { lightbox } = instance.luminousInstances.find(luminous => luminous.isOpen)!
        // @ts-ignore
        lightbox.currentTrigger = instance.triggers[thumb.dataset.index as number]
        lightbox._updateImgSrc()
        lightbox._updateCaption()
        lightbox._sizeImgWrapperEl()
    }
}

export const config: GalleryActionConfig = {
    options,
    selector: ".luminous"
}

function options(instance: () => LuminousGallery) {
    let listener: ReturnType<typeof createOnClick>
    return {
        luminousOptions: {
            sourceAttribute: "href",
            closeTrigger,
            onOpen() {
                listener = createOnClick(instance())
                // @ts-ignore
                document.querySelector(".lum-open").addEventListener("click", listener)
            },
            onClose() {
                if (!listener) return
                // @ts-ignore
                document.querySelector(".lum-open").removeEventListener("click", listener)
            },
            caption(node: Element) {
                // todo: use svelte-portal to a add captions to images
                return ""

                //                 const srcKey = instance().luminousInstances[0]?.settings?.sourceAttribute ?? "href"
                //                 const imageList = instance()
                //                     .triggers.map((trigger, index) => {
                //                         const src = trigger.getAttribute(srcKey)
                //                         const alt = null
                //                         return `<img class="lum-thumb w-auto w-20 h-20 object-cover object-center"  src="${src}" ${
                //                             alt ? `alt=${alt}` : ""
                //                         } data-index="${index}"/>`
                //                     })
                //                     .join("")
                //
                //                 return `
                //                     <div class="space-x-1 hidden sm:flex overflow-y-scroll flex-wrap justify-center mt-1 w-full">
                //                         ${imageList}
                //                     </div>
                //                 `
            }
        }
    }
}
