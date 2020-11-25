import * as Knex from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.table("posts", table => {
        table.dropColumn('likes')
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table("posts", table => {
        table.integer('likes').defaultTo(0)
    });
}

