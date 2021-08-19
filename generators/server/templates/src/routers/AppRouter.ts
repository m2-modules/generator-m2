import { baseRouterMiddleware } from '@m2-modules/base-controller'
import express, { NextFunction, Response } from 'express'
import { AppController } from '../controllers'

const router = express.Router()
const appController = new AppController()

router.use(baseRouterMiddleware)

router.use((req: any, _res: Response, next: NextFunction) => {
  console.table({
    requested_at: new Date().toLocaleString(),
    host: req.hostname,
    base_url: req.baseUrl,
    path: req.path,
    original_url: req.originalUrl,
  })
  next()
})

router.get('/info', (_req: any, res: Response, next: NextFunction) => {
  try {
    res.json({
      name: AppController.appName,
      version: AppController.appVersion,
    })
  } catch (e) {
    next(e)
  }
})
/**
 * @description Create app or apps
 */
router.post('/', async (req: any, res: Response, next: NextFunction) => {
  try {
    res.json(await appController.create(req.body))
  } catch (e) {
    next(e)
  }
})

/**
 * @description Read apps
 */
router.get('/', async (req: any, res: Response, next: NextFunction) => {
  try {
    res.json(await appController.find({ where: req.where }))
  } catch (e) {
    next(e)
  }
})

/**
 * @description Read app by id
 */
router.get('/:id', async (req: any, res: Response, next: NextFunction) => {
  try {
    res.json(await appController.find({ where: { id: req.params.id } }))
  } catch (e) {
    next(e)
  }
})

/**
 * @description Update app or apps
 */
router.put('/', async (req: any, res: Response, next: NextFunction) => {
  try {
    res.json(await appController.update(req.body))
  } catch (e) {
    next(e)
  }
})

/**
 * @description Update app by id
 */
router.put('/:id', async (req: any, res: Response, next: NextFunction) => {
  try {
    res.json(
      await appController.update({
        id: req.params.id,
        ...req.body,
      })
    )
  } catch (e) {
    next(e)
  }
})

/**
 * @description Delete app by id
 */
router.delete('/:id', async (req: any, res: Response, next: NextFunction) => {
  try {
    res.json(await appController.delete(req.params.id))
  } catch (e) {
    next(e)
  }
})

export const appRouter = { context: '/app', router }
