require('dotenv').config();
const mongoose = require('mongoose');
// const customer = require('../models/customerModels');
const fs = require('fs');
const Customer = require('../models/customerModels');
const DB = process.env.DATABASE;

console.log(DB)
mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(con => {
    console.log("Database connection established");
    // console.log(con.connection);
});

const customers = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));

const importData = async () => {
    try {
        // const customersData = JSON.parse(customers);
        await Customer.create(customers);
        console.log("Customer created")
    } catch (error) {
        console.log(error);
    }
    process.exit();
}

const clearData = async () => {
    try {
        await Customer.deleteMany();
        console.log("Customer deleted");
    } catch (error) {
        console.log(error);
    }
    process.exit();
}

console.log(process.argv);

if (process.argv[2] == "--import") {
    importData()
} else if (process.argv[2] == "--delete") {
    clearData()
}