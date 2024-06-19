const express = require('express')
const cors = require('cors')
const app = express()
const sqlite3 = require('sqlite3').verbose()

app.use(cors())
app.use(express.json())

app.listen(3333)