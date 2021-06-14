const {inttoradix64, radix64toint} = require("./conversion-service") 
const memory  = require("../models/memory")

const memoryService = new memory();

// code in urls code -> url 
let shortUrlCodeToUrl = {};
//creating a reverse map because even url needs to be unique
let urlToShortUrlCode = {};

const mx = 4398046511103;
module.exports = class urlService  {

    createShortUrl(url) {
        
        let shortCode = memoryService.findUrl(url);
        if (shortCode) return { shortUrl : inttoradix64(shortCode), url }


        let random_number = Math.floor(Math.random() * mx);
        if (memoryService.shortUrlExists((random_number)) ) return createShortUrl(url);
        memoryService.addShortUrl(random_number, url)

        return {
            shortUrl : inttoradix64(random_number),
            url
        }
    }

    createCustomShortUrl(shortUrl, url) {
        
        let shortUrlCode = radix64toint(shortUrl);

        if (memoryService.findUrl()) throw new Error('URL already has a short url')
        if (memoryService.shortUrlExists(shortUrlCode)) throw new Error('This short URL exists please try with another URL');

        memoryService.addShortUrl(shortUrlCode, url);

        return;
    }


};