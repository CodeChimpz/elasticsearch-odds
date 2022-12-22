import {SearchService} from "./elastic-module/elastic.service.js";

export const runQuery = async function async(req, res) {
    try {
        const index = req.params.index
        const {searchBy, sortBy, size} = req.body
        const result = await SearchService.get(index, searchBy, sortBy, size)
        res.status(200).json({result})
    } catch (err) {
        console.log(err)
        res.status(500).json({error: err})
    }
}