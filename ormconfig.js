require('dotenv').config();

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  synchronize: false,
};
