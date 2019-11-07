import express from 'express'
import { AppController } from '../controllers'

const router = express.Router()

router.use((req: any, _res: any, next: () => void) => {
  console.table({
    requested_at: new Date().toLocaleString(),
    host: req.hostname,
    base_url: req.baseUrl,
    path: req.path,
    original_url: req.originalUrl
  })
  next()
})

router.get('/info', (_req: any, res: any) => {
  res.json({
    name: AppController.appName,
    version: AppController.appVersion
  })
})

export default { context: '/app', router }
