const fs = require("fs");
const Customer = require("../models/customerModels")


const getCustomers = async (req, res, next) => {
  console.log(req.query)

  try {
    const queryObj = { ...req.query };
    const excludeColumn = ['page', 'sort', 'limit', 'fields'];
    excludeColumn.forEach(el => delete queryObj[el]);


    let queryStr = JSON.stringify(queryObj)
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`); // =>$gt, $gte, $lte
    console.log(JSON.parse(queryStr))
    queryStr = JSON.parse(queryStr);

    let query = Customer.find(queryStr);

    //sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy)
      query = query.sort(sortBy);
    } else {
      query = query.sort("createdAt")
    }

    //fields limiting
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      query = query.select(fields)
    } else {
      query = query.select("-password, -__v")
    }
    // const customers = await Customer.find(queryStr)

    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 2;
    const skip = (page - 1) * limit;
    query = query.skip(skip).limit(limit);

    let newCust;
    if (req.query.page) {
      newCust = await Customer.countDocuments();
      if (skip > newCust) throw new Error("Page does not exist");
    }
    const customers = await query;

    res.status(200).json({
      status: "success",
      totalData: customers.length,
      requestAt: req.requestTime,
      data: {
        customers,
      },
      totalPage: newCust
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
