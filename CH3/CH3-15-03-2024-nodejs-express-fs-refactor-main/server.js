require('dotenv').config();
const mongoose = require('mongoose');
const app = require("./app");

const PORT = process.env.PORT;

const DB = process.env.DATABASE;
// const DB = "mongodb://localhost:27017/ch4"
console.log(DB)
mongoose.connect(DB, {
  useNewUrlParser: true,
}).then(con => {
  console.log("Database connection established");
  // console.log(con.connection);
});

app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});
