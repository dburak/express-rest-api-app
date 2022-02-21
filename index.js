const express = require('express')
const {customerDatabase} = require('./database')
const flatted = require('flatted')


const app = express()

app.set('view engine', 'pug')

app.get('/customers', (req, res) => {
    const customers = customerDatabase.load();
    //res.send(flatted.stringify(customers));
    res.render('customers', {customers})
})

app.get('/customers/:customerName', (req, res) => { 
    const customer = customerDatabase.findByName(req.params.customerName);
    
    if(!customer) return res.status(404).send('Cannot find customer.')

    res.render('customer', {customer});
})

app.get('/', (req, res) => {
    res.render('index');
})



app.listen(3000, () => {
    console.log("started listening on 3000");
} )