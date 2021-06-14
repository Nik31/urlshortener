const {Router} = require("express");
const urlService = require("../services/urlService")

const service = new urlService()

const route = Router();



route.post('/', (req, res) => {

    let {url , shortUrl} = req.body;
    
    let response = {};
    
    if (!shortUrl) {
        response = service.createShortUrl(url);
    } else {
        service.createCustomShortUrl(shortUrl, url);
        res.json("url create with short code" + shortUrl)
    }

    return res.json(response)
    
})


module.exports = route;