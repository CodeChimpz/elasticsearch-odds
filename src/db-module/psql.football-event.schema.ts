export class FootballEventSchema {
    //schema declaration using knex types for knex query builder
    static schema = {
        FE_id: {
            type: 'increments'
        },
        E_name: {
            type: 'string'
        },
        date: {
            type: 'datetime'
        },
        E_description: {
            type: 'text'
        },
        Team1_name: {
            type: 'string'
        },
        Team1_coefficient: {
            type: 'string'
        },
        Team2_name: {
            type: 'string'
        },
        Team2_coefficient: {
            type: 'string'
        },
    }
    //instance attributes
    FE_id: number
    E_name: string
    date: Date
    E_description: string
    Team1_name: string
    Team1_coefficient: number
    Team2_name: string
    Team2_coefficient: number

    constructor(obj: { id?: number, name: string, eventDateTime: Date , description: string, team1Name: string, team1Coefficient: number, team2Name: string, team2Coefficient: number }) {
        this.FE_id = obj.id
        this.E_name = obj.name
        this.date = obj.eventDateTime
        this.E_description = obj.description
        this.Team1_name = obj.team1Name
        this.Team1_coefficient = obj.team1Coefficient
        this.Team2_name = obj.team2Name
        this.Team2_coefficient = obj.team2Coefficient
    }
}