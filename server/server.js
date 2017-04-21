const express = require('express');
const requests = require('./api/requests');

var app = express();
var port = process.env.PORT || 3000;

//GET Root
app.get('/',(req,res)=>{
	res.send('Working');
});

//////////
//API+++++
//////////

//Get Game GET Request
app.get('/api/getGame',(req,res)=>{

});


app.listen(port,()=>{
	console.log('Server running on port',port);
});