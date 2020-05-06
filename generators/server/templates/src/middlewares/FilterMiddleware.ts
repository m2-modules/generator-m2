import { NextFunction, Request, Response } from 'express'

export function filterMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log('Request filtered')
  next()
}
