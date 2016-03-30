// Update with your config settings.

module.exports =
  {
    client: 'pg',
    pool: { min: 1, max: 7 },
    connection: {
      host: 'localhost',
      port: '5432',
      database: 'sandbox',
      user: 'postgres',
      password: 'sqlPlease'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
;

module.exports.development = module.exports.staging = module.exports.production = module.exports;