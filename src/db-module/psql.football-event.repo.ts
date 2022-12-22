import {connection as knex} from './index.js'

export class FootballEventRepo {
    knex
    dbName
    schema

    constructor(knexClient, dbName, schema) {
        this.knex = knexClient
        this.dbName = dbName
        this.schema = schema.schema
    }

    async init() {
        const knex = this.knex
        const schemaDeclaration = this.schema
        if (await knex.schema.hasTable(this.dbName) && !process.env.DROP_TABLES) {
            // throw new Error('Table ' + this.dbName + ' already exists')
            return
        }
        await knex.schema.createTable(this.dbName, (table: any) => {
            Object.getOwnPropertyNames(schemaDeclaration).forEach(property => {
                table[schemaDeclaration[property].type](property)
            })
        })
    }

    async getValues() {
        const knex = this.knex
        return knex.select().from(this.dbName)
    }

    async insertValues(values: Array<any>) {
        const knex = this.knex
        await Promise.all(values.map(obj => {
            knex.insert(this.dbName, obj).onConflict().merge()
        }))
        console.log('Updated data in DB')
    }
}




