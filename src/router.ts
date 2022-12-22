import {Router} from 'express'
import {SearchService} from "./elastic-module/elastic.service.js";
import {runQuery} from "./controllers.js";

export const router = Router();

router.post('/latest/:index', runQuery)
