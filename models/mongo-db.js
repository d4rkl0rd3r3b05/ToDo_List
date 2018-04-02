var mongoose = require('mongoose');
mongoose.connect('mongodb://dummy:dummy@ds149144.mlab.com:49144/frogcoders_todo'); 

module.exports = mongoose;
