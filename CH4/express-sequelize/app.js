require('dotenv').config()

const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
const customerRoute = require('./routes/index')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(customerRoute);
app.use(morgan('dev'));
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});