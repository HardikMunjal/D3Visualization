module.exports = function (app) {


app.get('/', function(req, res, next) {
	res.render('index.html');
});

app.get('/json', function(req, res, next) {
	var flare={
   "name": "flare"
   }
res.json(flare);
});


app.get('/test', function(req, res, next) {
	res.render('test.html');
});

};


//http://jsfiddle.net/BTfmH/12/