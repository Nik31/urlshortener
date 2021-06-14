
module.exports = class Memory {

    constructor() {
        this.shortUrlCodeToUrl = {};
        this.urlToShortUrlCode = {};
    }

    //findUrl
    findUrl( url ) {

        console.log(this.shortUrlCodeToUrl);
        console.log(this.urlToShortUrlCode);
        if (this.urlToShortUrlCode[url] ) 
        {
            return  this.urlToShortUrlCode[url];
                
        }
        else {
            return null;      
        }
    }

    //AddShortUrl
     addShortUrl(shortUrlCode, url) {
        this.shortUrlCodeToUrl[shortUrlCode] = url;
        this.urlToShortUrlCode[url] = shortUrlCode;

        
        return ;    
    }

    //shortUrlExists
     shortUrlExists(shortUrlCode) {

        if (this.shortUrlCodeToUrl[shortUrlCode]) return true;
        return false;

    }


}