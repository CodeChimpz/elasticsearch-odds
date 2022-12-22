import {SearchService} from "../elastic-module/elastic.service.js";
import {Repos} from "../db-module/index.js";

setInterval(async () => {
    const data = await Repos.FootballEvent.getValues()
    await SearchService.bulk(data, 'football-event')
    console.log('Synced with Elasticsearch')
}, Number(process.env.ES_WRITE_INTERVAL) || 60 * 1000)