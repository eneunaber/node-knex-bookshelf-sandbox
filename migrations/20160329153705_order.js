
var tableName = 'orders';

exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.createTableIfNotExists(tableName, function (table) {
            table.increments().primary();
            table.integer('customerId')
                .references('id')
                .inTable('customers');
        })
    ]);
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable(tableName)
    ]);
};
