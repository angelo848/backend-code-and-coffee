const express = require('express')

const routes = express.Router()
const UserController = require('./controllers/UserController')
const PostController = require('./controllers/PostController')
const SessionController = require('./controllers/SessionController')

// User routes
routes.get('/users', UserController.index)
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

routes.get('/', (req, res) => {
  return res.send('ok')
})

// Session routes
routes.post('/authenticate', SessionController.create)
routes.use(SessionController.validate)

module.exports = routes
