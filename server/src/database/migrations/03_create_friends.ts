import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('friends',table=>{
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users')
        table.integer('friend_id').references('id').inTable('users')
        
       
    })
}
export async function down(knex:Knex){
    return knex.schema.dropTable('friends')
}