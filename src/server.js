const express = require('express')
const routes = require('./routes')
const cors = require('cors')
require('dotenv').config()

// if (process.env.NODE_ENV === 'development') {
// }

require('./database')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT)
console.log(`Server executing in port ${process.env.PORT}`)
console.log(process.env.DB_HOST)
console.log(process.env.DB_USER)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DATABASE)
