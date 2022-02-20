const Customer = require('./customer')
const Driver = require('./driver')
const {customerDatabase, driverDatabase} = require('./database')

const burak = Customer.create({name: 'Burak'});
const mert = Customer.create({name: 'Mert'});
const mehmet = Driver.create({name: 'Mehmet'});

burak.order(mehmet, "Burger King 7. Cadde", "Emek mah. Bişkek cad. No: 125/3");
burak.order(mehmet, "Gülçimen Aspava", "Emek mah. Bişkek cad. No: 125/3");
burak.order(mehmet, "Subway", "Emek mah. Bişkek cad. No: 125/3");
burak.order(mehmet, "McDonalds", "Emek mah. Bişkek cad. No: 125/3");
mert.order(mehmet, "Yıldız Aspava", "Emek mah. Kazakistan cad. No: 24/1")


function printOrder(order){
    console.log(`${order.customer.name} ordered from ${order.restaurant} to ${order.destination} (Deliverer: ${order.driver.name}) `);
}

function printOrderHistory(customer){

    if (customer.orders.length == 0)
        return console.log(`${customer.name} has no order yet.`);
    customer.orders.forEach(printOrder);
}


customerDatabase.save([burak, mert]);

const customers = customerDatabase.load()
customers.forEach(printOrderHistory); 

//db.save('customers', [burak]);
//db.insert('customers', mert);
//db.save('drivers', [mehmet]);


//const ceren = new Customer("Ceren");
//db.insert('customers', ceren);
//db.remove('customers', 2);


//const burak = customerDatabase.findByName('Burak');
//printOrderHistory(burak);

//burak.order(mehmet, "KFC", "Emek mah. Bişkek cad. No: 125/3");
//customerDatabase.update(burak);




 

//customers.forEach(p => console.log(p.name))


