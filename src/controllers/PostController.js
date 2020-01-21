const User = require('../models/User')
const Post = require('../models/Post')

module.exports = {
  async index(req, res) {
    try {
      const { author_id } = req.params

      if (!author_id) {
        // Se a rota não possuir um ID do autor, ela retornará todos os posts
        const posts = await Post.findAll()

        return res.json(posts)
      }

      const author = await User.findByPk(author_id, {
        include: { association: 'posts' }
      })

      // Caso exista um ID do autor, ela retorna os posts desse autor
      return res.json(author)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  },

  async store(req, res) {
    try {
      const { author_id } = req.params
      const { title, thumb_url, content } = req.body

      const user = await User.findByPk(author_id)

      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      }

      const post = await Post.create({
        author_id,
        title,
        thumb_url,
        content
      })

      return res.json(post)
    } catch (error) {
      console.log(error)
      return res.status(500).send(error.toString())
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params
      const { title, thumb_url, content } = req.body

      const post = await Post.findByPk(id)
      await post.update({ title, thumb_url, content })

      return res.json(post)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params

      const post = await Post.findByPk(id)
      await post.destroy()

      return res.json(post)
    } catch (error) {
      return res.status(500).send(error.toString())
    }
  }
}
