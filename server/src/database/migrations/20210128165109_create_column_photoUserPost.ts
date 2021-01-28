import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.table("posts", table => {
    table.string('photoUserPost')
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.table("posts", table => {
    table.dropColumn('photoUserPost')
  });
}

