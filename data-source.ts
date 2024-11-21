import { DataSource, DataSourceOptions } from "typeorm";
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: '52.90.201.66',
  database: 'mycv',
  port: 5432,
  password: '0^C$fLva248pJuRO',
  username: 'postgres',
  entities: ['**/*.entity.js'],
  synchronize:true,
  migrations: ["dist/migrations/*.js"],
}
const dataSource = new DataSource(dataSourceOptions)
export default dataSource
