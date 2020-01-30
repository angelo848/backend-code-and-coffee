const { Model, DataTypes } = require('sequelize')

class Post extends Model {
  static init(sequelize) {
    super.init(
      {
        title: DataTypes.STRING,
        thumb_url: DataTypes.STRING,
        content: DataTypes.STRING,
        category: DataTypes.STRING
      },
      {
        sequelize
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'author_id', as: 'author' })
  }
}

module.exports = Post
