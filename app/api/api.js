var axios = require('axios');

var fetchGame = (id)=>{
	var encodedURI = 'http://localhost:3000/api/game/'+id;

	return axios.get(encodedURI)
		.then((res)=>{
			return res.data;
		}).catch((e)=>{

			return 404;
		})
}


module.exports = {
	fetchGame
}