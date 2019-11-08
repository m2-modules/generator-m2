import express from 'express'
import bodyParser from 'body-parser'
import Router from './interfaces/router-interface'
import middlewares from './middlewares'
import routers from './routers'
import entities from './entities'
import { createConnection } from '@m2fw/datasource'

const app = express()
app.use(bodyParser.json())

console.log(`${new Date().toLocaleString()}: Start to apply middlewares...`)
middlewares.forEach((mw: any, idx: number) => {
  console.log(`${String(idx).padStart(2, '0')}. ${mw.name}`)
  app.use(mw)
})
console.log(`${new Date().toLocaleString()}: Appyling middlewares is done`)

console.log(`${new Date().toLocaleString()}: Start to apply routers...`)

routers.forEach(({ context, router }: Router, idx: number) => {
  router.use((req: any, _res: any, next) => {
    console.table({
      requested_at: new Date().toLocaleString(),
      host: req.hostname,
      base_url: req.baseUrl,
      path: req.path,
      original_url: req.originalUrl
    })
    next()
  })

  context = context.startsWith('/') ? context : '/' + context
  console.log(`${String(idx).padStart(2, '0')}. ${context}`)
  app.use(context, router)
})
console.log(`${new Date().toLocaleString()}: Applying routers is done`)

createConnection(
  {
    name: 'default',
    type: 'sqlite',
    database: 'sqlite.db',
    synchronize: true,
    logging: true,
    entities
  },
  () => {
    console.log('\x1b[36m%s\x1b[0m', 'Database is connected')
    app.listen(<%= runningPort %>, () => console.log('\x1b[36m%s\x1b[0m', '<%= appName %> Server is running on port <%= runningPort %>'))
  }
)
