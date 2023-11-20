import ImageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export const client = createClient({
    projectId: '7gb1gl0c',
    dataset: 'production',
    apiVersion: '2022-03-25',
    useCdn: true,
})

const builder = ImageUrlBuilder(client)

export function urlFor(source: string | StaticImport) {
    return builder.image(source)
}