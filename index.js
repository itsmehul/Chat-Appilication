var express = require('express')

//app setup
var app = express();

var server = app.listen(4000, () => {
    console.log('listening to requests on port 4000');
})

//Static files
app.use(express.static('public'));