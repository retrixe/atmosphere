import kyLibrary from 'ky'

const ky = kyLibrary.create({
  prefixUrl: '/',
  hooks: {
    beforeRequest: [
      req => req.headers.set('Authorization', localStorage.getItem('atmosphere:token') ?? ''),
    ],
    beforeError: [
      async error => {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          const data = await error.response?.json<{ error?: string }>()
          if (data.error) {
            error.name = 'AtmosphereError'
            error.message = data.error
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (e: unknown) {
          /* Do nothing */
        }

        return error
      },
    ],
  },
})

export default ky
