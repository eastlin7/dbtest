const express = require('express')
const bodyParser = require('body-parser')

const {analyze} = require('./functions/analyze')

const app = express()
app.use(express.json())

var server = require('http').createServer(app)
var port = process.env.PORT || 3001


app.post('/analyze', (req,res) => {
    if(req.body.text === undefined) {
        res.status(400)
        res.send("Error no input found")
        return;
    }
    res.send(analyze(req.body.text.toString()))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


module.exports = app;