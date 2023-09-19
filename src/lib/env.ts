if (!process.env.NEXT_PUBLIC_SERVER_URL)
  throw new Error('Not found environment values')

const env = {
  NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
} as const

export default env
