var axios = require('axios');

var fetchGame = (id)=>{
	var encodedURI = `http://localhost:3000/api/game/${id}`;

	return axios.get(encodedURI)
		.then((res)=>{
			return res.data;
		}).catch((e)=>{

			return 404;
		})
}

//needs to be refactored, limit should be held in an object
//together with other properties as order, etc.
//(types are games, companies & platforms)
var searchElements = (term,type,limit=10)=>{
	var encodedURI = `http://localhost:3000/api/search/?search=${term}&type=${type}&limit=${limit}`;

	return axios.get(encodedURI)
		.then((res)=>{
			return res.data;
		},(e)=>{
			console.log(e);
			return e;	
		});
}

module.exports = {
	fetchGame,
	searchElements
}