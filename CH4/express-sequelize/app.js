require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const flash = require('connect-flash');
const session = require('express-session');

const PORT = process.env.PORT || 3000;

const app = express();
const customerRoute = require('./routes/index')
const adminRoute = require('./routes/customerAdminRoute')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    session({
        secret: 'secret',
        saveUninitialized: true,
        resave: true
    })
)
app.use(flash());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(customerRoute);
app.use(adminRoute);

app.use(morgan('dev'));
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
});