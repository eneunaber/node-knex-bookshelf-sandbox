var ordersController = require('../controllers/ordersController');

module.exports = function(app) {
    app.route('/')
        .get(ordersController.get);
};