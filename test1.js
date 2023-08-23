const db1 = require("./app");
const Sequelize = require("sequelize");
let sequelize,
  schema,
  login = true,
  db = {};
let config = false;

if (config == true) {
  console.log("Connection true");
} else {
  sequelize = new Sequelize("", "", "", { dialect: "postgres" });
  sequelize.beforeConnect(async (dbConfig) => {
    let secret1 = await db1.test();
    console.log("Secret", secret1);
    dbConfig.username = secret1.username;
    dbConfig.password = secret1.password;
    dbConfig.host = secret1.host;
    dbConfig.port = secret1.port;
    schema = secret1.schema;
    console.log(schema);
    dbConfig.dialectOptions = {
      useUTC: true,
      dateStrings: true,
      typeCast: true,
      ssl: {
        sslmode: "require",
        rejectUnauthorized: false,
      },
    };
    dbConfig.pool = {
      max: 2,
      min: 0,
      idle: 0,
      acquire: 3000,
    };
  });
}

db.schema = schema;
db.sequelize = sequelize;

async function test1() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfull");
  } catch (error) {
    console.log(error);
  }
}

test1();

db.Sequelize = Sequelize;

module.exports = { db: db };
