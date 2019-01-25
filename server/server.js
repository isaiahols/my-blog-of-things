const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const massive = require('massive')

const { DB_STRING, PORT } = process.env;

const app = express()
app.use(bodyParser.json())

massive(DB_STRING)
    .then((db) => app.set('db', db))
    .catch((err) => console.log(err))

    




app.listen(PORT, () => console.log('hello here on port' + PORT)
)