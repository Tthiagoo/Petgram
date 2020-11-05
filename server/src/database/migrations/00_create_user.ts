import Knex from 'knex';

export async function up(knex:Knex){
    knex.schema.createTable('users',table=>{
        table.increments('id').primary();
        table.string('name',25).notNullable()
        table.string('username',12).unique().notNullable()
        table.integer('password').notNullable()
        table.text('bio')
        
    })
}