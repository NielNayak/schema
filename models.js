let db = require("./test1").db;
let account;

account = db.sequelize.define(
  "accounts",
  {
    id: { type: db.Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: db.Sequelize.STRING, allowNull: false },
    email: { type: db.Sequelize.STRING, allowNull: false },
    created_on: { type: db.Sequelize.STRING, allowNull: false },
    updated_at: { type: db.Sequelize.STRING, allowNull: true },
    created_at: { type: db.Sequelize.STRING, allowNull: true },
  },
  {
    //   timestamps: true,
    freezeTableName: true,
    underscored: true,
    schema: db.schema,
  }
);

module.exports = {
  Account: account,
};
