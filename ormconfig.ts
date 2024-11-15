import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


var dbConfig = {
  synchronize: false,
  entities: [/*...*/],
  migrations: [/*...*/],
};

switch (process.env.NODE_ENV) {
  case 'development':
    console.log('here');
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'db.sqlite',
      entities: ['**/*.entity.js'],
    });
    break;
  case 'test':
    Object.assign(dbConfig, {
      type: 'sqlite',
      database: 'test.sqlite',
      entities: ['**/*.entity.ts'],
    });
    break;
  case 'production':
    break;
  default:
    throw new Error('unknown environment');
}

module.exports = dbConfig;
