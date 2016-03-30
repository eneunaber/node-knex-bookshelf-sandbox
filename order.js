
var Bookshelf = require('./bookshelf');

require('./customer');
var Order = Bookshelf.Model.extend({
  tableName: 'orders',
  customer: function() {
    return this.hasOne('Customer', 'id');
  }
});

module.exports = Bookshelf.model('Order', Order);