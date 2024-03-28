const { Customer } = require("../models");

const customerPage = async (req, res, next) => {
    try {
        const customers = await Customer.findAll();
        console.log(customers)
        res.render("customers/index.ejs", {
            customers,
        });
    } catch (error) {
        console.log(error);
        res.render("customers/error.ejs", {
            message: error.message
        })
    }
}
const createCustomerPage = async (req, res, next) => {
    try {
        res.render("customers/create.ejs");
    } catch (error) {
        console.log(error);
        res.render("customers/error.ejs", {
            message: error.message
        })
    }
}
const createCustomer = async (req, res) => {
    try {
        const newCust = await Customer.create(req.body);
        console.log(newCust);
        res.redirect('/customers');
    } catch (error) {
        console.log(error.message)
    }
}
const editCustomerPage = async (req, res, next) => {
    try {
        const customer = await Customer.findByPk(req.params.id);
        res.render("customers/edit.ejs", {
            customer
        });
    } catch (error) {
        console.log(error);
        res.render("customers/error.ejs", {
            message: error.message
        })
    }
}
const editCustomer = async (req, res, next) => {
    try {
        const updatedCustomer = await Customer.update(req.body, { where: { id: req.body.id } });
        // res.render("customers/edit.ejs", {
        //     customer
        // });
        res.redirect('/customers');
    } catch (error) {
        console.log(error);
        res.render("customers/error.ejs", {
            message: error.message
        })
    }
}
const deleteCustomer = async (req, res, next) => {
    try {
        // const updatedCustomer = await Customer.remove({ where: { id: req.body.id } });
        await Customer.destroy({ where: { id: req.body.id } });
        res.redirect('/customers');
    } catch (error) {
        console.log(error);
        res.render("customers/error.ejs", {
            message: error.message
        })
    }
}
module.exports = { customerPage, createCustomerPage, createCustomer, editCustomerPage, editCustomer, deleteCustomer }