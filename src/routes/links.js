const {Router} = require("express");
const route = Router();

//
// route.get

route.get('/', (req, res) => {
    res.send("Inside api/links")
})


module.exports = route;