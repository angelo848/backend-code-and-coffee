const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({ hello: 'World' })
})

module.exports = routes
