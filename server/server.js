const path = require('path');
const express = require('express');
const requests = require('./api/requests');


var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'dist')));


//GET Root
app.get('/',(req,res)=>{
	res.send('Working');
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//////////
//API ROUTES
//////////


//
//GET REQ.
//

///****SIMPLE GET REQUESTS****////

//Get Game GET Request
app.get('/api/game/:id',(req,res)=>{
	console.log('recieved');
	requests.getGameAll(req.params.id)
	.then((item)=>{	
		console.log(item);
		res.send(item);
	})
	.catch(()=>{
		res.status(404).send();
	})
});
//Get Console GET Request
app.get('/api/system/:id',(req,res)=>{
	console.log(req.params.id);
	requests.getConsole(req.params.id)
	.then((item)=>{	
		res.send(item);
	})
	.catch(()=>{
		res.status(404).send();
	})
});
//Get Company GET Request
app.get('/api/company/:id',(req,res)=>{
	console.log(req.params.id);
	requests.getCompany(req.params.id)
	.then((item)=>{	
		res.send(item);
	})
	.catch(()=>{
		res.status(404).send();
	})
});

//****SEARCH REQUESTS****////
//
//Takes 2 query parameters after search string: 
//type (games,platforms,companies) and limit
app.get('/api/search/:search',(req,res)=>{
	requests.search(req.query.type,req.params.search,req.query.limit)
	.then((item)=>{	
		res.send(item);
	})
	.catch(()=>{
		res.status(404).send('404');
	})
});

//
//POST REQ
//

app.listen(port,()=>{
	console.log('Server running on port',port);
});