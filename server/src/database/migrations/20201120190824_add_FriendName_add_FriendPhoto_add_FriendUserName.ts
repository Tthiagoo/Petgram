import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
	return knex.schema.table("friends", table => {
    table.string('friendPhoto')
    table.string('friendUserName')
    table.string('friendName')
  });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('friends', table => {
        table.dropColumn('friendPhoto')
        table.dropColumn('friendUserName')
        table.dropColumn('friendName')
    })
}

