const User = require('../models/User')
const jwt = require('../utils/jwt')

module.exports = {
  async create(req, res) {
    const [, hash] = req.headers.authorization.split(' ')
    const [user_name, password] = Buffer.from(hash, 'base64')
      .toString()
      .split(':')

    try {
      let user = await User.findOne({ where: { user_name } })

      if (!user) {
        return res.status(404).send({ error: 'Username not found' })
      }

      // Validate password
      if (!(await user.checkPassword(password))) {
        return res.status(401).send({ error: 'User password wrong' })
      }

      const token = jwt.sign({ user: user.id })

      return res.json({
        user,
        token
      })
    } catch (error) {
      return res.status(500).send(error)
    }
  },

  async validate(req, res, next) {
    const [, token] = req.headers['authorization'].split(' ')
    try {
      const payload = await jwt.verify(token)
      const user = await User.findByPk(payload.user)

      if (!user) {
        return res.status(401)
      }

      req.auth = user

      next()
    } catch (error) {
      return res.status(401).send(error)
    }
  }
}
