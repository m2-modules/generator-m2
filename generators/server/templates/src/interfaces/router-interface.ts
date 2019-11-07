import { Router as ExRouter } from 'express'

export default interface Router {
  context: string
  router: ExRouter
}
