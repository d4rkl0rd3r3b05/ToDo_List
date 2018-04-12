module.exports = function(router) { 
	router.get('*', function(req, res) {
      	res.sendFile('index.html', { root: path.join(__dirname, './dist') });
	});
}
