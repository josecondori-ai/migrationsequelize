require('dotenv').config();

module.exports={
   development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    dialect:"mysql",
    migrationStorageTableName:"migrations"
  },
  "test": {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    port:process.env.PORT,
    dialect: "mysql",
    migrationStorageTableName:"migrations"

  },
  "production": {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    port:process.env.PORT,
    dialect: "mysql",
    migrationStorageTableName:"migrations"

  }
}
