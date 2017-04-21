var unirest = require('unirest');


//API Config
const mashapeKey = "7trttflEhpmshdEHi1QDgdONAh7Jp1vZAHWjsnCV3jloxiWLIk";
var url='https://igdbcom-internet-game-database-v1.p.mashape.com/';
var gameFields='id,name,developers,publishers,summary,storyline,rating,pegi,websites,cover,screenshots,release_dates'

////
//GET REQUESTS
////

//Get single game basic
//RETURN: Game object
var getGame = (game)=>{
	return new Promise((resolve,reject)=>{
		unirest.get(url+'games/'+game+'?fields='+gameFields)
		.header("X-Mashape-Key", mashapeKey)
		.header("Accept", "application/json")
		.end(function (result) {
			if(result.status!=200){
				console.log(result.status);
				reject(result.status);
			}else{
				resolve(result.body[0]);
			}
		});
  	});
}
//Get single console
//RETURN: Console object
var getConsole = (consoleID)=>{
	return new Promise((resolve,reject)=>{
		unirest.get(url+'platforms/'+consoleID+'?fields=*')
		.header("X-Mashape-Key", mashapeKey)
		.header("Accept", "application/json")
		.end(function (result) {
			if(result.status!=200){
				reject(result.status);
			}else{
				resolve(result.body[0]);
			}
		});
	});
}
//Get single company
//RETURN: Company object
var getCompany = (company)=>{
	return new Promise((resolve,reject)=>{
		unirest.get(url+'companies/'+company+'?fields=*')
		.header("X-Mashape-Key", mashapeKey)
		.header("Accept", "application/json")
		.end(function (result) {
			if(result.status!=200){
				reject(result.status);
			}else{
				resolve(result.body[0]);
			}
		});
	});
}
//Extract consoles from release dates array
//RETURN: array of console ids(int)
var consoleArrayResolve = (game)=>{
	var resolvedArray = [];
	var unresolvedArray = game.release_dates;

	for(var i = 0; i<unresolvedArray.length;i++){
		resolvedArray.push(unresolvedArray[i].platform);
	}
	return resolvedArray;
}

//Console Name Array Resolve
//RETURN: array of console names(string)
var consoleArrayNameResolve = (array)=>{
	var resolvedArray = [];
	var count = 0;
	return new Promise((resolve,reject)=>{
		array.forEach((item)=>{
			getConsole(item)
			.then((back)=>{
				resolvedArray.push({id:back.id,name:back.name});
				count++;
				if(count===array.length){
					resolve(resolvedArray);
				}
			}).catch((e)=>{
				//unvalid requests are just ignored
				count++;
				if(count===array.length){
					resolve(resolvedArray);
				}
			})
		
		});
	});
}


//Company Array Resolve
//RETURN: array of company names(string)
var companyArrayNameResolve = (array)=>{
	var resolvedArray = [];
	var count = 0;
	return new Promise((resolve,reject)=>{
		array.forEach((item)=>{
			getCompany(item)
			.then((back)=>{
				resolvedArray.push({id:back.id,name:back.name});
				count++;
				if(count===array.length){
					resolve(resolvedArray);
				}
			}).catch((e)=>{
				//unvalid requests are just ignored
				count++;
				if(count===array.length){
					resolve(resolvedArray);
				}
			})
		
		});
	});
}


//Get game complete
//
//3 API calls and returns new objects
//with identifiers for console and company
//decoded to strings
//
//RETURN: Modified Game object
var getGameAll = (game)=>{
	var gameFullObject = {};
	var successCount = 0;

	return new Promise((resolve,reject)=>{
		getGame(game)
			.then((resultGame)=>{
				gameFullObject = resultGame;

				//get developers
				companyArrayNameResolve(resultGame.developers).then((item)=>{
					successCount++;
					gameFullObject.developers = item;
					if(successCount===3){
						resolve(gameFullObject);
					}
				});
				//get publishers
				companyArrayNameResolve(resultGame.publishers).then((item)=>{
					successCount++;
					gameFullObject.publishers = item;
					if(successCount===3){
						resolve(gameFullObject);
					}
				});
				//get consoles
				consoleArrayNameResolve(consoleArrayResolve(resultGame)).then((item)=>{
					successCount++;
					gameFullObject.consoles = item;
					if(successCount===3){
						resolve(gameFullObject);
					}
				});


			})

			.catch((resultGameError)=>{
				reject(resultGameError);
			})
		}
	);
}



/////////////////////////
module.exports = {
	getGame,
	getConsole,
	getCompany,
	getGameAll
}

