import {workerData} from "worker_threads";
import {Repos} from "../db-module/index.js";
import {Api} from '../api-query/index.js';


setInterval(async () => {
    const data = await Api.get()
    await Repos.FootballEvent.insertValues(data)
}, Number(process.env.DB_WRITE_INTERVAL) || 60 * 1000)