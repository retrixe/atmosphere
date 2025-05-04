import type { RequestHandler } from './$types'

export const GET: RequestHandler = () => {
  // FIXME
  return new Response(JSON.stringify([]))
}
