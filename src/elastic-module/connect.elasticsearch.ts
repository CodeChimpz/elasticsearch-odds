import {config} from 'dotenv'

config()
import {Client} from "@elastic/elasticsearch";


const client = new Client({
    cloud: {
        id: <string>process.env.ES_ID,
    },
    auth: {
        apiKey: <string>process.env.ES_API_KEY
    }
});

export default client

