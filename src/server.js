const express = require('express')
const linkRoute = require('./routes/links')

app = express()


app.use(express.json())


//routes
app.get('/', (req, res) => {
    res.send("ho gya");
})

app.use('/api/links', linkRoute);

app.listen(6060, () => {
    console.log("Server Running");
})