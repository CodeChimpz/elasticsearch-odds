import {faker} from '@faker-js/faker';
import {FootballEventSchema} from "../db-module/psql.football-event.schema.js";

class ApiService {
    constructor() {
    }

    get() {
        //mock implementation
        return Array.from({length: 100}).map(() => {
            return new FootballEventSchema({
                name: faker.random.alpha(10),
                eventDateTime: faker.date.recent(),
                description: faker.random.alpha(50),
                team1Name: faker.name.firstName(),
                team1Coefficient: faker.datatype.float(),
                team2Name: faker.name.firstName(),
                team2Coefficient: faker.datatype.float()
            })
        })
    }
}

export const Api = new ApiService()
