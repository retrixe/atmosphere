import type { PageServerLoad } from './$types'

interface PageData {
  title: string
  image?: string
  imageLarge?: boolean
  description: string
  noIndex?: boolean
}

export const load: PageServerLoad<PageData> = () => {
  return {
    title: 'atmosphere',
    // FIXME: image: '',
    // FIXME: imageLarge: true,
    description: 'A flexible, self-hosted file share accessible through web browsers.',
  }
}
