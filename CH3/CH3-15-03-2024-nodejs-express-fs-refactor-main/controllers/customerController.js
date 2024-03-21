const fs = require("fs");
const Customer = require("../models/customerModels")


const getCustomers = async (req, res, next) => {

  try {
    const customers = await Customer.find()
    // console.log(req.requestTime);
    res.status(200).json({
      status: "success",
      totalData: customers.length,
      requestAt: req.requestTime,
      data: {
        customers,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message
    })
  }

};

const getCustomerById = async (req, res, next) => {
  const id = req.params.id;

  try {
    const customer = await Customer.findById(id);
    res.status(200).json({
      status: "success",
      data: {
        customer,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message
    })
  }
  // menggunakan array method utk membantu menemukan spesifik data

};

const updateCustomer = async (req, res) => {

  console.log("INI update customer");
  try {
    const id = req.params.id;
    await Customer.findByIdAndUpdate(id, req.body, {
      new: true
    })
    res.status(200).json({
      status: "success",
      message: "berhasil update data",
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `customer dengan ID : ${id} gak ada`,
      error: err.message
    });
  }

};

const deleteCustomer = async (req, res) => {

  try {
    const id = req.params.id;

    await Customer.findByIdAndDelete(id)

    res.status(204).json({
      status: "Success",
      message: "Success delete data"
    })
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: `customer dengan ID : ${id} gak ada`,
      error: err.message
    });
  }

};

const createCustomer = async (req, res) => {
  console.log(req.body);

  // const newCustomer = req.body;

  try {
    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      "status": "success",
      data: {
        customer: newCustomer
      }
    })
  } catch (error) {
    res.status(400).json({
      status: "Pailed",
      "messagerror.": error.message
    })
  }

};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
