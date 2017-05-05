var React = require('react');
var { Tab, Tabs, TabList, TabPanel }  =require('react-tabs');
var queryString = require('query-string');
var api = require('../api/api');


class GameView extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			gameID: null,
			title: null,
			developers: null,
			publishers:null,
			genres: null,
			consoles: null,
			releaseDate: null,
			storyline:null,
			cover:null,
			coverMain:null
		}
		this.updateGameState = this.updateGameState.bind(this);
	}

	updateGameState(game){

		api.fetchGame(game)
			.then(function(res){
				
				
				this.setState(function(){
					return{
						gameID: game,
						title: res.name,
						developers: res.developers,
						publishers: res.publishers,
						genres: null,
						consoles: res.consoles,
						releaseDate: null,
						storyline:res.storyline || 'no storyline...',
						coverMain:res.coverMain
					}
				});
				
			}.bind(this));
	}

	componentDidMount(){
		//hay que hacerlo para que funcione con estado o url
		this.updateGameState(queryString.parse(location.search).id);
	}

	render(){
		//Query has no id
		if(queryString.parse(location.search).id === undefined){
				document.title = 'Game not found'+' - Pixel Citadel';
				return(<p>404</p>);
			}
		//Loading response
		if(this.state.title === null){
				document.title = 'Loading...';
				return(<p>Loading...</p>);
		}

		//Query as id
		document.title = this.state.title+' - Pixel Citadel';
		return(

			<div className='game-view'>
				<div className='game-cover'>

				</div>
				<div className='row game-window'>
					<img src={this.state.coverMain} className='game-image '/>
					<div className='aux-image-div column large-4 medium-6 small 12'></div>
					<div className='game-info column large-8 medium-6 small-12'>
						<div className='top-info'>
							<h2>{this.state.title}</h2>
							<p>Company name</p>
							<p>Xbox- PC - Playstation - Switch</p>
						</div>
						<div className='bottom-info'>

						<Tabs>
    						<TabList>
      							<Tab>About</Tab>
      							<Tab>Release Dates</Tab>
      							<Tab>Web</Tab>
      							<Tab>Buy it!</Tab>
    						</TabList>
    					<TabPanel>
      						<p>{this.state.storyline}</p>
    					</TabPanel>
    					<TabPanel>
      						<h2>Any content 2</h2>
    					</TabPanel>
    					<TabPanel>
      						<h2>Any content 3</h2>
    					</TabPanel>
    					<TabPanel>
      						<h2>Any content 4</h2>
    					</TabPanel>
  						</Tabs>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = GameView;