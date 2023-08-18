import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import { router } from './api/routers'

dotenv.config()
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get("/", function (_, res) {
  res.send('server OK')
});
    
app.use('/', router)

    
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`server started on port ${port}`)
});