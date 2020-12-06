import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('likes',table=>{
        table.increments('id').primary();
        table.integer('user_id').references('id').inTable('users')
        table.string('nameUser')
        table.integer('posts_id').references('id').inTable('posts') 
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('posts')
}