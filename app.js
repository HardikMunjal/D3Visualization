var express = require('express');
var app = express();
var router = express.Router();

//app.set('view engine', 'jade');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

app.use(require('./routes/corsheaders'));
    // res.header('Access-Control-Allow-Origin', req.headers.origin); 
    //  res.header('Access-Control-Allow-Credentials', true); 
    //  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT'); 
    //  res.header('Access-Control-Allow-Headers', 'Content-Type'); 

app.use(bodyParser.json({ 
 	limit: '10mb' 
    })); 

app.use(cookieParser());
app.use(expressSession({
	secret:'secret',
	resave: false,
   saveUninitialized: true,
  cookie: { 
  	 maxAge: 45000, 
 //  	secure: true ,
     httpOnly: false, // key
 //    maxAge: null
   }
}));

app.use(router);
require('./routes')(router);



app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


var server = app.listen(4000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});