// console.log("HEelo gaesss good night")

const fs = require("fs");
const express = require('express');

const app = express();
const PORT = 3000;

const customers = JSON.parse(fs.readFileSync(`${__dirname}/data/dummyData.json`));

//for reading json data
app.use(express.json());

const defaultRouter = (req, res, next) => {
  res.send("/ is running")

}
const getAllCust = (req, res, next) => {
  res.status(200).json({
    "status": "OK",
    "totalData": customers.length,
    data: {
      customers,
    }
  })
}
const getCustById = (req, res) => {

  const { id } = req.params;

  const customer = customers.find((cust) => cust._id === id);
  // const customer = customers.find(cust => cust.id === id);

  if (!customer) {
    res.status(404).json({
      "status": "failed",
      "message": `Data With this ${id} Not found`
    })
  }

  console.log(customer)
  console.log(id);
  res.status(200).json({
    "status": "OK",
    "totalData": customers.length,
    data: {
      customer,
    }
  })
}
const addNewCust = (req, res) => {
  console.log(req.params);

  customers.push(req.body);
  const newCustomer = req.body;
  fs.writeFile(`${__dirname}/data/dummyData.json`, JSON.stringify(customers), (err) => {
    if (err) {
      console.error(err); // Log the error for debugging
      return res.status(500).json({ message: "Error writing file" }); // Send error response
    }
    res.status(201).json({
      "status": "OK",
      "data": {
        customers: newCustomer
      }
    });
  });
}
const updateCustomer = (req, res) => {
  const id = req.params.id;
  // if (id !==)

  const customer = customers.find(cust => cust.id === id);
  const customerIndex = customers.findIndex(cust => cust._id === id)

  // if (!customer) {
  //   res.status(404).json({
  //     "status": "failed",
  //     "message": `Data With this ${id} Not found`
  //   })
  // }

  console.log("Cust index", customerIndex)
  customers[customerIndex] = { ...customers[customerIndex], ...req.body }

  fs.writeFile(`${__dirname}/data/dummyData.json`, JSON.stringify(customers), (err) => {
    if (err) {
      console.error(err); // Log the error for debugging
      return res.status(500).json({ message: "Error writing file" }); // Send error response
    }
    return res.status(200).json({
      "status": "success  ",
      "message": "data updated",
      "data": {
        customers: customers[customerIndex],
        customer
      }
    });
  });
}
const deleteCustomer = (req, res, next) => {
  const id = req.params.id;

  const customer = customers.find(cust => cust.id === id);
  const customerIndex = customers.findIndex(cust => cust._id === id)
  if (!customer) {
    res.status(404).json({
      "status": "failed",
      "message": `Data With this id ${id} Not found`
    })
  }

  console.log("Cust index", customerIndex)
  // customers[customerIndex] = { ...customers[customerIndex], ...req.body }
  customers.splice(customerIndex, 1);
  fs.writeFile(`${__dirname}/data/dummyData.json`, JSON.stringify(customers), (err) => {
    if (err) {
      console.error(err); // Log the error for debugging
      return res.status(500).json({ message: "Error writing file" }); // Send error response
    }
    return res.status(200).json({
      "status": "success  ",
      "message": "data deleted",
    });
  });
}
app.get('/', defaultRouter);
app.route("/api/v1/customers").get(getAllCust).post(addNewCust);
app.route("/api/v1/customers/:id").get(getCustById).patch(updateCustomer).delete(deleteCustomer)
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});