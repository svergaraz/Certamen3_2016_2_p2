var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var serieSchema = new Schema({ 
 name: { type: String }
});

module.exports = mongoose.model('Serie', serieSchema);