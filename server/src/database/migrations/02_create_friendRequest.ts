import Knex from 'knex';

export async function up(knex:Knex){
    return knex.schema.createTable('friendrequest',table=>{
        table.increments('id').primary();
        table.integer('idRecipient').references('id').inTable('users')
        table.integer('idSender').references('id').inTable('users')
        table.string('photoSender').references('photo').inTable('users')
       
    })
}
export async function down(knex:Knex){
    return knex.schema.dropTable('friendrequest')
}
