require('dotenv').config();
require('./config/db')
const express = require('express');
const app = express();
const port = process.env.port || 3000
app.use(express.json({ limit: "50mb" }))
const routes = require('./routes/index');
const path = require('path');
const fs = require('fs')
const http = require('http')
app.use(express.static(path.join(__dirname, 'public')))
const server = http.createServer(app)
const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: '*'
  }
})

const ss = require('socket.io-stream')

const stream = ss.createStream()

app.set('view engine', 'ejs')

app.use('/api', routes)

server.listen(port, () => {
  console.log('server started successfully')
});

io.on('connection', (socket) => {
  console.log('new user connected with id ', socket.id)
  const istream = fs.createReadStream('./test.pdf')

  ss(socket).emit('file', stream, { name: 'test.pdf' })

  istream.pipe(stream)
})
