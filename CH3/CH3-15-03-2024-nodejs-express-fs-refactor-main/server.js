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

const custSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name cannot be empty"],
  },
  email: {
    type: String,
    unique: true,
    // required: [true, "Email cannot be empty"]
    default: "thisemail@example.com"
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
    default: "Konoha"
  },
  city: {
    type: String,
    required: true,
    default: "Naruto"
  },
})

const Customer = mongoose.model("Customer", custSchema);

const customerTest = new Customer({
  name: "Ini test",
  // email: "iniemail@gmail.com",
  phone: 9869885
})

customerTest.save().then(doc => {
  console.log(doc)
}).catch(err => {
  console.log(`Error ${err}`);
});
app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});
