var express = require('express')
var socket = require('socket.io')

//app setup
var app = express();

var server = app.listen(4000, () => {
    console.log('listening to requests on port 4000');
})

//Static files
app.use(express.static('public'));

//Socket setup pass the server we want to work with
var io = socket(server);

//Socket io waits for a connection to be made. So we listen for that event
io.on('connection', (socket)=>{
    console.log('made socket connection', socket.id)
})