const router = require('express').Router();

const customerAdmin = require('../controller/customerAdminController');

router.get("/", customerAdmin.customerPage);
router.get("/create", customerAdmin.createCustomerPage);
router.post("/admin/create", customerAdmin.createCustomer);
router.get("/admin/:id", customerAdmin.editCustomerPage)
router.post("/admin/edit/:id", customerAdmin.editCustomerPage)
router.post("/admin/delete/:id", customerAdmin.deleteCustomer)

module.exports = router;