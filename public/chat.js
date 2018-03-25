//Make connection
const socket = io.connect('https://itschatapp.herokuapp.com:4000/');

//Query DOM
const message = document.getElementById('message');
handle = document.getElementById('handle')
btn = document.getElementById('send');
output = document.getElementById('output')
feedback = document.getElementById('feedback')

//Emit Events
btn.addEventListener('click', () => {
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
})

message.addEventListener('keypress', (e) => {
    if (e.key == 'Enter') {
        socket.emit('chat', {
            message: message.value,
            handle: handle.value
        })
    }
    socket.emit('typing', handle.value);
})

//Listen for events
socket.on('_chat', (data) => {
    output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
})

let timer = setTimeout(makeNoTypingState, 1000);
socket.on('typing', function (data) {
    feedback.innerHTML = '<p><em>' + data + ' is typing message...</em></p>'
    clearTimeout(timer);
    timer = setTimeout(makeNoTypingState, 1000);
})

function makeNoTypingState() {
    feedback.innerHTML = "";
}﻿
