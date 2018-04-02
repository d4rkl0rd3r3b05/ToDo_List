var mongoose = require('mongoose');

//Define Model=============================================================
module.exports = mongoose.model('Todo', {
    text : String,
    done : Boolean
});

