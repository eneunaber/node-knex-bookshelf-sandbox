var express = require('express');
var port = 8889;
var app = express();

app.listen(port, function (err) {
    console.log('server listening on port ' + port);
});

require('./routes/ordersRoute.js')(app);

module.exports = app;