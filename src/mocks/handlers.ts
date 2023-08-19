import { rest } from 'msw'

export const handlers = [
  rest.get(`/`, (_req, res, ctx) => {
    return res(ctx.json({ message: 'ready' }))
  }),
]
