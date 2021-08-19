import { createConnection } from '@m2-modules/datasource'
import bodyParser from 'body-parser'
import express, { Request, Response, NextFunction } from 'express'
import { entities } from './entities'
import { IRouter } from './interfaces'
import { middlewares } from './middlewares'
import { routers } from './routers'

const app = express()
app.use(bodyParser.json())

console.log(`${new Date().toLocaleString()}: Start to apply middlewares...`)
middlewares.forEach((mw: any, idx: number) => {
  console.log(`${String(idx).padStart(2, '0')}. ${mw.name}`)
  app.use(mw)
})
console.log(`${new Date().toLocaleString()}: Appyling middlewares is done`)

console.log(`${new Date().toLocaleString()}: Start to apply routers...`)
routers.forEach(({ context, router }: IRouter, idx: number) => {
  router.use(
    (error: Error, _req: Request, res: Response, _next: NextFunction) => {
      console.error(error.stack)
      res.status(500).json(error.message)
    }
  )

  context = context.startsWith('/') ? context : '/' + context
  console.log(`${String(idx).padStart(2, '0')}. ${context}`)
  app.use('/api' + context, router)
})
console.log(`${new Date().toLocaleString()}: Applying routers is done`)

createConnection({
  name: 'main',
  ormType: 'typeorm',
  options: {
    type: 'sqlite',
    database: 'sqlite.db',
    synchronize: true,
    logging: true,
    entities,
  },
  connectedCallback: (connction) => {
    console.log('\x1b[36m%s\x1b[0m', 'Database is connected')

    app.listen(8080, () => {
      console.log(
        '\x1b[36m%s\x1b[0m',
        '<%= appName %> Server is running on port <%= runningPort %>'
      )
    })
  },
})
