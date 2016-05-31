module.exports = function (app) {


app.get('/', function(req, res, next) {
	res.render('index.html');
});


app.get('/parse', function(req, res, next) {
	var test=[
    {id: 1, name: 'hello', parent: 0},
    {id: 2, name: 'hello', parent: 0}
   ]
   res.json(test);
});

app.get('/json', function(req, res, next) {
	var json =
  [
    {id: 1, name: 'hello', parent: 0},
    {id: 2, name: 'hello', parent: 0},
    {id: 3, name: 'hello', parent: 1},
    {id: 4, name: 'hello', parent: 3},
    {id: 5, name: 'hello', parent: 4},
    {id: 6, name: 'hello', parent: 4},
    {id: 7, name: 'hello', parent: 3},
    {id: 8, name: 'hello', parent: 2}
]
  res.json(json);
});


app.get('/test', function(req, res, next) {
	res.render('test.html');
});

};


//http://jsfiddle.net/BTfmH/12/