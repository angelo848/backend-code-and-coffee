const express = require('express')

const routes = express.Router()
const UserController = require('./controllers/UserController')

routes.get('/users/:id', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

module.exports = routes
