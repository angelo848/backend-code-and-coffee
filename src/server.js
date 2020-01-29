const app = require('./app')

require('dotenv').config()
require('./database')

app.listen(process.env.PORT)
console.log(`Server executing in port ${process.env.PORT}`)
