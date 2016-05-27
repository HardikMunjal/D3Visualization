var express = require('express');
var app = express();
var router = express.Router();

//app.set('view engine', 'jade');
var bodyParser = require('body-parser');

var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
converter.fromFile("abc.csv",function(err,result){ 
  console.log(result);
});

var json2csv = require('nice-json2csv');


app.use(json2csv.expressDecorator);  

app.get('/getCsv', function(req, res){
    res.csv([
  {
   "name": "Amit",
   "children": [
    {
     "name": "Ankit",
     "children": [
      {"name": "Hardik", "size": 3938,"children": [
                                          {"name": "Naveen", "size": 3938},
                                          {"name": "Aanchal", "size": 743} ]
  },
      {"name": "Atul", "size": 3812},
      {"name": "Avinash", "size": 6714},
      {"name": "Ashish", "size": 743}
     ]
    },
    {
     "name": "Varun",
     "children": [
      {"name": "Apoorv", "size": 3534},
      {"name": "Dinesh", "size": 5731},
      {"name": "Benezir", "size": 7840},
      {"name": "xxx", "size": 5914}
     ]
    }
   ]
  },
  {
   "name": "Chetan",
   "children": [
    {
     "name": "Faujan",
     "children": [
      {"name": "ABC", "size": 1302},
      {"name": "DEF", "size": 24593},
      {"name": "GHI", "size": 652},
      {"name": "JKL", "size": 636},
      {"name": "ABN", "size": 6703}
     ]
    },
    {
     "name": "Sandeep",
     "children": [
      {"name": "xyz", "size": 2138},
      {"name": "x1x", "size": 3824},
      {"name": "y1y", "size": 8435}
     ]
    },
    {"name": "Divyesh", "size": 16540}
   ]
  }
 ], "myFile.csv");
});



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