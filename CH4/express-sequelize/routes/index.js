const router = require('express').Router();

const Customer = require("./customerRouter")

router.use("/api/v1/customers", Customer);
router.use("/api/v1/customers", (req, res, next) => {
    console.log("INI default");
    next(); // Call next() to pass control to the next middleware function
});
module.exports = router;