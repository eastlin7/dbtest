const express = require('express')

const {analyze} = require('./functions/analyze')

const app = express()
app.use(express.json())

var server = require('http').createServer(app)
var port = process.env.PORT || 3001


/**
 * Route for Analyze, will take a piece of text from a Post and return a Json with information about the text.
 */
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