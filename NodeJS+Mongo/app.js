var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require("method-override");
var app = express();

// Connection to DB
mongoose.connect('mongodb://localhost/series', function(err, res) {
 if(err) throw err;
 console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
app.use(methodOverride());

// Import Models and Controllers
var models = require('./models/serie')(app, mongoose);
var SerieCtrl = require('./controllers/series');

var router = express.Router();

// Index - Route
router.get('/', function(req, res) { 
 res.send("Hola Mundo - www.programacion.com.py");
});

app.use(router);

// API routes
var api = express.Router();

api.route('/series') 
 .get(SerieCtrl.findAll)
 .post(SerieCtrl.add);

api.route('/series/:id') 
 .get(SerieCtrl.findById)
 .put(SerieCtrl.update)
 .delete(SerieCtrl.delete);

app.use('/api', api);


// Start server
app.listen(3000, function() {
 console.log("Node server running on http://localhost:3000");
});
