require('dotenv').config();
require('./config/db')
const express = require('express');
const app = express();
const port = process.env.port || 3000
app.use(express.json({ limit: "50mb" }))
const routes = require('./routes/index');
const path = require('path');
const fs = require('fs');
const net = require("net")
const remote_server = process.argv[2];
app.use(express.static(path.join(__dirname, 'public')))





app.set('view engine', 'ejs')

app.use('/api', routes)






app.listen(port, () => {
  console.log('server started successfully')
});