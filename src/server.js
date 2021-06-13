const express = require('express')
const {db} = require('./models/db')
const linkRoute = require('./routes/links')

app = express()


//routes
app.get('/', (req, res) => {
    res.send("ho gya");
})

app.use('/api/links', linkRoute);

db.sync()
    .then(() => {
        console.log("db works");
    })
    .catch((err) => {
        console.log("no it doesnt because " + err );
    })
app.listen(6060, () => {
    console.log("Server Running");
})