
exports.seed = function(knex, Promise) {
    var tableName = 'customers';
    
    return Promise.join(
        // Deletes ALL existing entries
        knex(tableName).del(), 

        // Inserts seed entries
        knex(tableName).insert({id: 1, name: 'Customer 1'}),
        knex(tableName).insert({id: 2, name: 'Customer 2'}),
        knex(tableName).insert({id: 3, name: 'Customer 3'})
    );
};
