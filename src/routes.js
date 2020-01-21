const express = require('express')

const routes = express.Router()
const UserController = require('./controllers/UserController')
const PostController = require('./controllers/PostController')

// User routes
routes.get('/users/:id', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.destroy)

// Post routes
routes.get('/posts', PostController.index)
routes.get('/posts/:id', PostController.index)
routes.get('/users/:author_id/posts', PostController.index)
routes.post('/users/:author_id/posts', PostController.store)
routes.put('/posts/:id', PostController.update)
routes.delete('/posts/:id', PostController.destroy)

module.exports = routes
