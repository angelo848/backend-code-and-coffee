const User = require('../models/User')
const bcypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
  async create(req, res) {
    try {
      const { user_name, password } = req.body
      const user = await User.findOne({ where: { user_name } })

      if (!user) {
        return res.status(404).send({ error: 'Username not found' })
      }

      // Validate password
      if (!bcypt.compareSync(password, user.password)) {
        return res.status(401).send({ error: 'User password wrong' })
      }

      const token = jwt.sign(user.toJSON(), 'node-auth', {
        expiresIn: '2h'
      })

      return res.json({
        user,
        token
      })
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  },

  validate(req, res, next) {
    try {
      let token =
        req.body.token ||
        req.headers['authorization'] ||
        req.headers['x-access-token']

      if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length)
      }

      if (token) {
        jwt.verify(token, 'node-auth', function(err, decoded) {
          if (err) {
            return res
              .status(500)
              .send({ message: 'Falha ao autenticar o token!' })
          } else {
            req.decoded = decoded
            next()
          }
        })
      } else {
        return res.status(403).send({ message: 'Não há token' })
      }
    } catch (error) {
      return res.status(500).send({ error: error.toString() })
    }
  }
}
