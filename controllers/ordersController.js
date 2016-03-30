var Orders = require('../order');

module.exports = {
    get: function (req, res) {
        return Orders.fetchAll({withRelated: ['customer']})
        .then(function (data) {
            res.json(data.toJSON());
        }).catch(function (error) {
            res.status(500).json({msg: error.message});
        });
    }
};