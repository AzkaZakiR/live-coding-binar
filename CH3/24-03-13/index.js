// console.log("HEelo gaesss good night")

const fs = require("fs");
const express = require('express');

const app = express();
const PORT = 3000;

const customers = JSON.parse(fs.readFileSync(`${__dirname}/data/dummyData.json`));

//for reading json data
app.use(express.json());
app.get('/', (req, res) => {
    res.send("/ is running")
});
app.get('/api/v1/customers', (req, res) => {
    res.status(200).json({
        "status": "OK",
        "totalData": customers.length,
        data:{
            customers,
        }
    })
});

app.post("/api/v1/customers", (req, res) =>{
    console.log(req.body);

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
})
app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}` );
});