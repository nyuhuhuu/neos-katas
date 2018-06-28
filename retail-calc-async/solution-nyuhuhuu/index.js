const axios = require('axios');
const config = require('../config');

function AsyncRetailCalculator(quantity, unitPrice) {
    if (arguments.length != 2) {
        throw new Error("AsyncRetailCalculator() takes two arguments: quantity and unit price");
    }
    this.quantity = quantity;
    this.unitPrice = unitPrice;
}

AsyncRetailCalculator.prototype.getTotal = function() {
    let total = this.quantity * this.unitPrice;
    return new Promise(function(resolve, reject) {
        axios.get(config.serverUrl + '/discounts/')
            .then(function(response) {
                const discounts = response.data;
                let rate = discounts.reverse().find((discount) => discount[0] < total);
                if (typeof rate != 'undefined') {
                    total = total * (1 - rate[1]);
                }
                resolve(total);
            })
            .catch(function(error) {
                reject(error);
            });
    });
};

module.exports = AsyncRetailCalculator;
