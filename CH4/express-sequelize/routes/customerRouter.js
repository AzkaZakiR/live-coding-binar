const router = require('express').Router();

const Customer = require('../controller/customerController');

router.post("/", Customer.createCustomer);

module.exports = router;