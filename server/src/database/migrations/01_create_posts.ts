import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('posts',table=>{
        table.increments('id').primary();
        table.string('namePost')
        table.string('photoPost')
        table.integer('likes').defaultTo(0)
        table.json('comments')
        table.integer('user_id').references('id').inTable('users')
    })
}
export async function down(knex:Knex){
    return knex.schema.dropTable('posts')
}