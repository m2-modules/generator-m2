import express, { Request, Response } from 'express'
import { <%= uccModuleName %>Controller } from '../controllers'

const router = express.Router()
const <%= lccModuleName %>Controller = new <%= uccModuleName %>Controller()

/* */
router.post('/', async (req: Request, res: Response) => {
  res.json(await <%= lccModuleName %>Controller.insert(req.body))
})

router.get('/', async (req: Request, res: Response) => {
  res.json(await <%= lccModuleName %>Controller.find())
})

router.get('/:id', (req: Request, res: Response) => {})

router.put('/', async (req: Request, res: Response) => {
  res.json(await <%= lccModuleName %>Controller.update(req.body))
})

router.put('/:id', async (req: Request, res: Response) => {
  res.json(
    await <%= lccModuleName %>Controller.update({
      id: req.params.id,
      ...req.body
    })
  )
})

export const <%= lccModuleName %>Router = { context: '/<%= lccModuleName %>', router }
