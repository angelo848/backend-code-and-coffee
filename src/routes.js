const express = require('express')

const routes = express.Router()
const UserController = require('./app/controllers/UserController')
const PostController = require('./app/controllers/PostController')
const SessionController = require('./app/controllers/SessionController')

// User routes
routes.get('/users', UserController.index)
routes.get('/users/:id', UserController.show)
routes.get('/me', SessionController.validate, UserController.show)
routes.post('/users', UserController.store)
routes.put('/users/:id', SessionController.validate, UserController.update)
routes.delete('/users/:id', UserController.destroy)

// Post routes
routes.get('/posts', PostController.index)
routes.get('/posts/:id', PostController.show)
routes.get('/users/:author_id/posts', PostController.index)
routes.post('/users/:author_id/posts', SessionController.validate, PostController.store)
routes.put('/posts/:id', SessionController.validate, PostController.update)
routes.delete('/posts/:id', SessionController.validate, PostController.destroy)


// Session routes
routes.get('/authenticate', SessionController.create)


module.exports = routes
