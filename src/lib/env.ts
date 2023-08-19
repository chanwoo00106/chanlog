if (!process.env.NEXT_PUBLIC_SERVER_URL || !process.env.NEXT_PUBLIC_API_MOCKING)
  throw new Error('Not found environment values')

const env = {
  NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
  NEXT_PUBLIC_API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING,
} as const

export default env
