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
  host: process.env.CLEARDB_DATABASE_URL,
  username: 'bc13c138ab156a',
  password: '9dc84451',
  database: 'heroku_46fa3a170055a33'
}
