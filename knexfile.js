require('dotenv').config();
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, PORT } = process.env

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASS,
    },
    debug:true,
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    },
    Seeds:{
      directory:"./seeds"
    }
  },

  staging: {
    client: 'pg',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL+"?ssl=true",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    }
  }

};