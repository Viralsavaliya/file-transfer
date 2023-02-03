require('dotenv').config();
require('./config/db')
const express = require('express');
const app = express();
const port = process.env.port || 3000
const routes = require('./routes/index');
const path = require('path')

app.use(express.json({ limit: "50mb" }))



app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.use('/api', routes)




app.listen(port, () => {
    console.log('server started successfully')
});