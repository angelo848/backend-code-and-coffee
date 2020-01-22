const express = require('express')
const routes = require('./routes')
const cors = require('cors')

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}

require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT)
