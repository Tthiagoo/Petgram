import Knex from 'knex';

export async function up(knex:Knex){
    knex.schema.createTable('users',table=>{
        table.increments('id').primary();
        table.string('')
    })
}