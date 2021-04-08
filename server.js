const express = require('express')
const app = express()

app.use(express.json())

const pool = require('./routes/pool')
app.use('/pool', pool)

const allocator = require('./routes/allocator')
app.use('/allocator', allocator)

app.listen(3000, () => console.log('Server started...'))