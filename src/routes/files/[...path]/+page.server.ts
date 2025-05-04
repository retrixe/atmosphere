import type { FileInfo } from '$lib/api/entities'
import { error } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

interface PageData {
  title: string
  image?: string
  imageLarge?: boolean
  description: string
  noIndex?: boolean
  contents: FileInfo[]
}

export const load: PageServerLoad<PageData> = async ({ params, fetch }) => {
  const req = await fetch(`/api/files${params.path ? `/${params.path}` : ''}`)
  const res = (await req.json()) as { error?: string } | FileInfo[]
  if (!Array.isArray(res)) return error(req.status, res.error)

  const files = res.reduce((acc, file) => acc + (file.type === 'file' ? 1 : 0), 0)
  const folders = res.reduce((acc, file) => acc + (file.type === 'folder' ? 1 : 0), 0)
  return {
    title: `/${params.path} - atmosphere`,
    // FIXME: image: '',
    // FIXME: imageLarge: true,
    description: `Folder containing ${files} files and ${folders} folders`,
    noIndex: true,
    contents: res,
  }
}
