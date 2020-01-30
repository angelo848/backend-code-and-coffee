const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        user_name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.VIRTUAL,
        password_hash: DataTypes.STRING
      },
      {
        sequelize
      }
    )
    this.addHook('beforeSave', async user =>
      user.password_hash = await bcrypt.hash(user.password, 8)
    )

    return this
  }

  static associate(models) {
    this.hasMany(models.Post, { foreignKey: 'author_id', as: 'posts' })
  }

  checkPassword(password) {
    return bcrypt.compareSync(password, this.password_hash)
  }
}

module.exports = User
