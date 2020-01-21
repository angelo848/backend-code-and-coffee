'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('posts', 'category', {
      type: Sequelize.STRING,
      allowNull: true,
      after: 'content'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('posts', 'category')
  }
}
