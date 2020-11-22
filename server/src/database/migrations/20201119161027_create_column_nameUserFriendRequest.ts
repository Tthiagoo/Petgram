import * as Knex from "knex";

export async function up(knex: Knex): Promise<void> {
	return knex.schema.table("friendrequest", table => {
    table.string('userSender').references('username').inTable('users')
  });
}

export async function down(knex: Knex): Promise<void> {
  
}
