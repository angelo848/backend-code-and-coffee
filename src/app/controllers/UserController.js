const User = require('../models/User')
const jwt = require('../../utils/jwt')

module.exports = {
  async index(req, res) {
    try {
      const user = await User.findAll()

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error)
    }
  },

  async show(req, res) {
    const { id } = req.params

    try {
      if (id) {
        const user = await User.findByPk(id)

        return res.json(user)
      }

      return res.send(req.auth)
    } catch (error) {
      return res.status(500).send(error)
    }
  },

  async store(req, res) {
    try {
      const { name, user_name, email, password } = req.body

      const user = await User.create({
        name,
        user_name,
        email,
        password
      })

      const token = jwt.sign({ user: user.id })

      return res.json({
        user,
        token
      })
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { name, user_name, email, old_password, new_password } = req.body
      const user = await User.findByPk(id)

      if (old_password && !(await user.checkPassword(old_password))) {
        return res.status(401).send({ message: 'Invalid password' })
      }

      await user.update({
        name,
        user_name,
        email,
        password: new_password
      })

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params
      const { password } = req.body

      if (!password) {
        return res
          .status(403)
          .send({ error: 'Please provide a password to confirm' })
      }

      const user = await User.findByPk(id)

      if (!(await user.checkPassword(password))) {
        return res.status(403).send({ error: 'Invalid password' })
      }

      await user.destroy()

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  }
}
