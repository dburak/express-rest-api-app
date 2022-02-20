const Order = require('./order')
const uuid = require('uuid')

class Customer {
    constructor(id = uuid.v4(), name, orders = []){
        this.id = id;
        this.name = name;
        this.orders = orders;
    }

    order(driver, restaurant, destination){
        const order = new Order(driver, this, restaurant, destination);
        this.orders.push(order);

        return order;
    }

    static create({id, name, orders}){
        return new Customer(id, name, orders);
    }
}



module.exports = Customer