import React, {Component} from 'react'; 
import queryString from 'query-string';
import api from '../api/api';
import GameViewDetails from './game-view-details';


class GameView extends Component {
	constructor(props){
		super(props);
		//REMOVE, NEEDS DEFAULTS OR GIVES ERROR
		this.state = {
			game: {}
		}	
		this.updateGameState(queryString.parse(location.search).id);
	}
	updateGameState(game){
		api.fetchGame(game)
			.then((res)=>{
				this.setState(()=>{
					return{
						game:res
					}
				});
				
			});
	}
	render(){
		//Query has no id
		if(queryString.parse(location.search).id === undefined){
				document.title = 'Game not found'+' - Pixel Citadel';
				return(<p>404</p>);
			}
		//Loading response
		if(!this.state.game.id){
				document.title = 'Loading...';
				return(<p>Loading...</p>);
		}
		//Query as id
		document.title = this.state.game.name+' - Pixel Citadel';
		return(
			<div className='game-view'>
				<div className='game-cover'>
				</div>
				<GameViewDetails game={this.state.game}/>
			</div>
		)
	}
}

export default GameView;