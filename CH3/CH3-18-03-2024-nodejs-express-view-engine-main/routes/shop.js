const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const adminData = require('./admin');
router.get('/', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.ejs'));
  const products = adminData.products;
  res.render('shop', { title: 'ini sjhop ejs', products: products })
});

module.exports = router;
