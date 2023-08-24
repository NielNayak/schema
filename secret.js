let data = {
  username: "postgres",
  password: "Sachin11",
  engine: "postgres",
  host: "database-1.cmab09x7sn7w.ap-south-1.rds.amazonaws.com",
  port: 5432,
  dbInstanceIdentifier: "database-1",
  schema: "test",
};

let test = () => {
  return data;
};

module.exports = { test };
