import {config} from 'dotenv'
import {FootballEventRepo} from "./psql.football-event.repo.js";
import {FootballEventSchema} from "./psql.football-event.schema.js";

config()
import knex_pkg from 'knex';

const {knex} = knex_pkg

export const connection = knex({
    client: 'postgres',
    connection: <string>process.env.PSQL_CONN_STRING,
    pool: {
        min: 0,
        max: Number(process.env.MAX_PSQL_POOL)
    }
})

const FE_Repo = new FootballEventRepo(connection, 'FootballEvent', FootballEventSchema)
await FE_Repo.init()

export const Repos = {
    FootballEvent: FE_Repo
}












































