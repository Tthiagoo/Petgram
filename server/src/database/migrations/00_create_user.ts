import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('users',table=>{
        table.string('id').primary();
        table.string('name',25).notNullable()
        table.string('username',12).unique().notNullable()
        table.string('password').notNullable()
        table.text('bio')
        table.string('photo')
        
    })
}
export async function down(knex:Knex){
    return knex.schema.dropTable('users')
}