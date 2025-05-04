import kyLibrary from 'ky'

const ky = kyLibrary.create({
  prefixUrl: '/',
  hooks: {
    beforeError: [
      async error => {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          const data = await error.response?.json<{ error?: string }>()
          if (data.error) {
            error.name = 'AtmosphereError'
            error.message = data.error
          }
        } catch {
          /* Do nothing */
        }

        return error
      },
    ],
  },
})

export default ky
