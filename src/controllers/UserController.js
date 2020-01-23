const User = require('../models/User')
const bcrypt = require('bcrypt')

module.exports = {
  async index(req, res) {
    try {
      const { id } = req.params

      if (id) {
        const user = await User.findByPk(id)

        return res.json(user)
      }

      const user = await User.findAll()

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  },

  async store(req, res) {
    try {
      const { name, user_name, email, password } = req.body
      const encryptedPass = bcrypt.hashSync(password, 8)

      const user = await User.create({
        name,
        user_name,
        email,
        password: encryptedPass
      })

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { name, user_name, email, old_password, new_password } = req.body
      const user = await User.findByPk(id)

      if (!bcrypt.compareSync(old_password, user.password)) {
        return res.status(401).send({ message: 'Invalid password' })
      }

      const encryptedPass = bcrypt.hashSync(new_password, 10)

      await user.update({
        name,
        user_name,
        email,
        password: encryptedPass
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

      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(403).send({ error: 'Invalid password' })
      }

      await user.destroy()

      return res.json(user)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  }
}
