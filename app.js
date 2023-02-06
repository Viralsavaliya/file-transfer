require('dotenv').config();
require('./config/db')
const express = require('express');
const app = express();
const port = process.env.port || 3000
const routes = require('./routes/index');
const path = require('path')


app.use(express.json({ limit: "50mb" }))

const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", function(socket){
	socket.on("sender-join",function(data){
		socket.join(data.uid);
	});
	socket.on("receiver-join",function(data){
		socket.join(data.uid);
		socket.in(data.sender_uid).emit("init", data.uid);
	});
	socket.on("file-meta",function(data){
		socket.in(data.uid).emit("fs-meta", data.metadata);
	});
	socket.on("fs-start",function(data){
		socket.in(data.uid).emit("fs-share", {});
	});
	socket.on("file-raw",function(data){
		socket.in(data.uid).emit("fs-share", data.buffer);
	})
});


app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.use('/api', routes)




server.listen(port, () => {
    console.log('server started successfully')
});