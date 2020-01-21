// DEVELOPMENT DB
// module.exports = {
//   dialect: 'mysql',
//   host: 'localhost',
//   username: 'root',
//   password: '',
//   database: 'code_and_coffee',
//   define: {
//     timestamps: true,
//     underscored: true
//   }
// }

// PRODUCTION DB
module.exports = {
  dialect: 'mysql',
  host: process.env.DB_HOST || 'us-cdbr-iron-east-05.cleardb.net',
  username: process.env.DB_USER || 'bc13c138ab156a',
  password: process.env.DB_PASSWORD || '9dc84451',
  database: 'heroku_46fa3a170055a33'
}
