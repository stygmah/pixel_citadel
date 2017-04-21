var unirest = require('unirest');


//API Config
const mashapeKey = "7trttflEhpmshdEHi1QDgdONAh7Jp1vZAHWjsnCV3jloxiWLIk";
var url='https://igdbcom-internet-game-database-v1.p.mashape.com/';


//		+++++++++		//
//Get single elements 	//
//		+++++++++		//

//Get single game basic
var getGame = (game)=>{
	return new Promise((resolve,reject)=>{
		unirest.get(url+'games/'+game+'?fields=*')
		.header("X-Mashape-Key", mashapeKey)
		.header("Accept", "application/json")
		.end(function (result) {
			if(result.status!=200){
				console.log(result.status);
				reject(result.status);
			}else{
				resolve(result.body);
			}
		});
  	});
}
//Get single console
var getConsole = (console)=>{
	return new Promise((resolve,reject)=>{
		unirest.get(url+'platforms/'+console+'?fields=*')
		.header("X-Mashape-Key", mashapeKey)
		.header("Accept", "application/json")
		.end(function (result) {
			if(result.status!=200){
				reject(result.status);
			}else{
				resolve(result.body);
			}
		});
	});
}
//Get single company
var getCompany = (companies)=>{
	return new Promise((resolve,reject)=>{
		unirest.get(url+'platforms/'+company+'?fields=*')
		.header("X-Mashape-Key", mashapeKey)
		.header("Accept", "application/json")
		.end(function (result) {
			if(result.status!=200){
				reject(result.status);
			}else{
				resolve(result.body);
			}
		});
	});
}





module.exports = getGame;

