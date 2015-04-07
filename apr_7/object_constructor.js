'use strict';

(function() {
  var DonutShop = function(locationName, options) {
    this.locationName = locationName; 
    if (!(options.minCustomers && options.maxCustomers && options.averagePerCustomer)) {
      throw "Donut Shops need both a min customers, max customers, and average per customer";
    }

    this.minCustomers = options.minCustomers;
    this.maxCustomers = options.maxCustomers;
    this.averagePerCustomer = options.averagePerCustomer;
    this.opens = options.opens || 700;
    this.closes = options.closes || 1800;
    this.hoursOpen = (this.closes - this.opens)/100;
  };

  DonutShop.prototype.generateRandom = function() {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers);
  };

  DonutShop.prototype.donutsPerHour = function() {
    return Math.floor(this.generateRandom() * this.averagePerCustomer);
  };

  DonutShop.prototype.donutsPerDay = function() {
    var total = 0;
    for (var i = 0; i < this.hoursOpen; i++) {
      total += this.donutsPerHour(); 
    };
    return total;
  };

  var sluShop = new DonutShop('south lake union', {minCustomers: 10, maxCustomers: 50, averagePerCustomer: 4.5});
  console.log(sluShop.donutsPerHour());
  console.log(sluShop.donutsPerDay());

  var errorShop = new DonutShop('this will throw an error', {});
})();
