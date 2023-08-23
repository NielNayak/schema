const account = require("./account");

const getData = async () => {
  console.log("Value", account);
  let data = await account.findAll({});
  console.log(data[0].dataValues);
  return data;
};

module.exports = { getData };
