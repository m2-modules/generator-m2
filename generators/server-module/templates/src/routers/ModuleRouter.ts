import express from 'express'
import { <%= uccModuleName %>Controller } from '../controllers'

const router = express.Router()
const <%= lccModuleName %>Controller = new <%= uccModuleName %>Controller()

/* */
router.post('/', async (req, res) => {
  res.json(await <%= lccModuleName %>Controller.create(req.body))
})

router.get('/', async (req, res) => {
  res.json(await <%= lccModuleName %>Controller.find())
})

router.get('/:id', (req, res) => {})

router.put('/', async (req, res) => {
  res.json(await <%= lccModuleName %>Controller.update(req.body))
})

router.put('/:id', async (req: any, res) => {
  res.json(
    await <%= lccModuleName %>Controller.update({
      id: req.params.id,
      ...req.body
    })
  )
})

export const <%= lccModuleName %>Router = { context: '/<%= lccModuleName %>', router }
