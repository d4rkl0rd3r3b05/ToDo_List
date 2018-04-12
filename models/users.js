var mongoose = require('mongoose');
var crypto = rquire('crypto');
var jwt = require('jsonwebtoken');

//Define Model Schema=============================================================
var userSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	hash: String,
	salt: String
});

//Setting Password
userSchema.methods.setPassword = function(password) {
	this.salt = crypto.randomBytes(16).toString('hex');
	this.hash = crypto.pbkdf2Sync(password), this.salt, 1000, 64,'sha512').toString('hex');
};

//Validating Password
userSchema.methods.validPassword = function(password) {
	var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512'.toString('hex'));
	return hash === this.hash;
}

//Generate JWT
userSchema.methods.generateJWT = function(){
	var expiry = new Date();
	expiry.setDate(expiry.getDate() + 7);

	return jwt.sign({
		_id: this._id,
		email: this.email,
		name: this.name,
		exp: parseInt(expiry.getTime() / 1000)},
		"MY_SERVER_ENC_KEY");
}