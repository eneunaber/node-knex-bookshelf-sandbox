
exports.seed = function(knex, Promise) {
  var tableName = 'orders';
  
  return Promise.join(
    // Deletes ALL existing entries
    knex(tableName).del(), 

    // Inserts seed entries
    knex(tableName).insert({id: 1, customerId: 3}),
    knex(tableName).insert({id: 2, customerId: 1}),
    knex(tableName).insert({id: 3, customerId: 1})
  );
};
