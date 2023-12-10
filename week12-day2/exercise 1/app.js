const express = require('express')
const app = express()
const routes = require('./routes/index.js')

app.listen(3000, () => {
    console.log('server is listening on port 3000')
})

app.use(express.json())
app.use('/', routes)
