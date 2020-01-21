const User = require('../models/User')

module.exports = {
  async index(req, res) {
    try {
      const { id } = req.params

      const user = await User.findByPk(id)

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error.toString())
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

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { name, user_name, email, password } = req.body

      const user = await User.findByPk(id)
      await user.update({
        name,
        user_name,
        email,
        password
      })

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params

      const user = await User.findByPk(id)
      await user.destroy()

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  }
}
