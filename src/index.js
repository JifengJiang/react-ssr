const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send(
        `
        <html>
            <head>
                <title>hello</title>
            </head>
            <body>
                <h1>Yo</h1>
                <p>hello world</p>
            </body>
        </html>
        `
    )
})

var server = app.listen(3000)