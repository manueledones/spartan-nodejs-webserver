var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
var staticPath = path.join(__dirname, '../typescript-knockout-scaffold/app');
app.use('/', express.static(staticPath));
var listener = app.listen(port, function() {
    console.log('listening on port ' + listener.address().port + 'from folder ' + staticPath);
})
