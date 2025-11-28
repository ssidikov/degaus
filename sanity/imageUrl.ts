import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from './client'

const builder = imageUrlBuilder(client)

export function urlForImage(source: SanityImageSource) {
  return builder.image(source).auto('format').fit('max')
}

export function urlForImageWithDimensions(
  source: SanityImageSource,
  width: number,
  height: number
) {
  return builder.image(source).width(width).height(height).auto('format').fit('max')
}

export function urlForOgImage(source: SanityImageSource) {
  return builder.image(source).width(1200).height(630).auto('format').fit('crop').url()
}
