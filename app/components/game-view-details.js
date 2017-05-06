import React from 'react';
import { Tab, Tabs, TabList, TabPanel }  from 'react-tabs';

const GameViewDetails = (props)=>{
	const consoles = props.game.consoles.map((console)=>{
		return console.name +' - ';
	});
	const developers = props.game.developers.map((developer)=>{
		return developer.name + ' - ';
	});

	return(
				<div className='row game-window'>
					<img src={props.game.coverMain} className='game-image '/>
					<div className='aux-image-div column large-4 medium-6 small 12'></div>
					<div className='game-info column large-8 medium-6 small-12'>
						<div className='top-info'>
							<h2>{props.game.name}</h2>
							<p>{developers}</p>
							<p>{consoles}</p>
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
      						<p>story</p>
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
		)
}

export default GameViewDetails;