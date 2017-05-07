import React from 'react';
import {NavLink} from 'react-router-dom';
import SearchInput from './search-input';

var Nav = (props) =>{
	return(

			<nav className="top-bar main-navigation">
				<div className="top-bar-left">
				<ul className="menu">
					<li>
						<NavLink className='logoText' exact to='/'>
							PIXEL CITADEL
						</NavLink>
					</li>
					<li>
						<SearchInput search={props.executeSearch}/>
					</li>
				</ul>
				
				</div>
				<div className="top-bar-right">
				<ul className="menu">
					<li>
						<a>Join</a>
					</li>
					<li>
						<a>Login</a>
					</li>
				</ul>
				</div>
			</nav>
	)
}

export default Nav;