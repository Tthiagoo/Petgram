import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('comments',table=>{
        table.increments('id').primary();
        table.string('comment')
        table.integer('post_id').references('id').inTable('posts')
        table.integer('user_id').references('id').inTable('users')
        table.string('usernameComment')
        table.string('photoComment')

        
    })
}
export async function down(knex:Knex){
    return knex.schema.dropTable('comments')
}