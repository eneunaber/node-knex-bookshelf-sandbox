var Bookshelf = require('./bookshelf');

require('./order');
var Customer = Bookshelf.Model.extend({
  tableName: 'customers',
  orders: function() {
    return this.belongsTo('Order');
  }
});

module.exports = Bookshelf.model('Customer', Customer);