const express = require('express')
const app = express()

app.use(express.static(`${__dirname}/client`))

app.listen(4848, () => console.log('Winner Winner 4848'))