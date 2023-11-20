import ImageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { createClient } from "next-sanity";

export const client = createClient({
    projectId: '7gb1gl0c',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true,
})

const builder = ImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}