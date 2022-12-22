import {config} from 'dotenv'
import client from "./elastic-module/connect.elasticsearch.js";
import './jobs/db.writer.js'
import './jobs/es.writer.js'
import express from 'express'

import {SearchService} from "./elastic-module/elastic.service.js";
import {router} from "./router.js";
import bodyParser from "body-parser";

config()

const app = express();
app.use(bodyParser.json())
app.use(router)

app.listen(process.env.PORT || 3000, () => {
    console.log('App started')
})

