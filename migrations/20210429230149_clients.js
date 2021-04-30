
exports.up = function (knex) {
    return knex.schema
        .createTable('clients', (table) => {
            table.increments().primary();
            table.string('name', 20).notNullable();
            table.string('email').notNullable();
            table.string('phone', 12).notNullable();
            table.string('pass', 10).notNullable();
            table.string('address')
            table.string('profile_pic')
            table.timestamps(true, true);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('clients')
};
