import type Elysia from 'elysia'
import { Router } from './router'

export function RouterPlugin (app: Elysia) {
  return app.derive((ctx) => {
    return {
      routes: Router.all,
      ...Router.all.get(ctx.route)
    }
  })
}