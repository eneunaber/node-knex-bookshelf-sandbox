
var tableName = 'customers';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists(tableName, function (table) {
            table.increments().primary();
            table.string('name');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable(tableName)
    ]);
};
