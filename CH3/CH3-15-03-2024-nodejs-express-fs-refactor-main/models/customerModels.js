const mongoose = require('mongoose');


const custSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name cannot be empty"],
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email cannot be empty"],
        default: "aaa@example.com"
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
    country: {
        type: String,
        required: true,
        default: "Naruto"
    },
})

const Customer = mongoose.model("Customer", custSchema);

const customerTest = new Customer({
    name: "Ini test",
    // email: "iniemail@gmail.com",
    phone: 1221,
    city: "Konoha",
})
// customerTest.save().then(doc => {
//     console.log(doc)
// }).catch(err => {
//     console.log(`Error ${err}`);});

module.exports = Customer;

