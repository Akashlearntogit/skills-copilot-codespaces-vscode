// Create web server
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

// Read comments.json file
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Set up the server
app.use(bodyParser.json());

// Set up the server
app.use(express.static(__dirname + '/public'));

// Get comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Add comments
app.post('/comments', function(req, res) {
  var newComment = {
    id: Date.now(),
