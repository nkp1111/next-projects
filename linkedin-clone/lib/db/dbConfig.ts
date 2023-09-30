import { Sequelize } from "sequelize";
import pg from "pg";

const postgresUrl: (string | undefined) = process.env.POSTGRES_URL;

let sequelize: Sequelize;
if (!postgresUrl) {
  console.log("postgres url string is not available")
} else {
  sequelize = new Sequelize(postgresUrl, {
    dialectModule: pg,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    logging: false,
  })
}

/**
 * @desc Starts sequelize connection
 */
const startDatabaseConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
    return true;
  } catch (error) {
    console.log('Error connecting to Database');
    console.log(error);
  }
};

export { sequelize, startDatabaseConnection };