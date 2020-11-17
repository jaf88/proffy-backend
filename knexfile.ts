import path from 'path';

module.exports = {
 client: 'sqlite3',
 connection: {
   filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
 },
 
 migrations: {
   directory: path.resolve(__dirname, 'src', 'database', 'migrations')
 },

 production: {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
},

 useNullAsDefault: true,

};
