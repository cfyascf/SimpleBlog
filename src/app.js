const express = require('express')
const app = express()

require('./startup/db')()

const router = require('./routes')
router(app)

const port = 8080
const server = app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = server