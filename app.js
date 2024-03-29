const path = require('path')
const express = require('express')
const app = express()

const htmlPath = path.join(__dirname)

app.use(express.static(htmlPath))

var server = app.listen(3000, function () {
    var host = 'localhost'
    var port = server.address().port
    console.log(htmlPath)
    console.log('listening on http://'+host+':'+port+'/')
})