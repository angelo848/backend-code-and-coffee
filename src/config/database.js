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
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  define: {
    timestamps: true,
    underscored: true
  }
}
