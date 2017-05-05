var React = require('react');
var {NavLink} = require('react-router-dom');


function Nav () {
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
						<NavLink exact to='/Games'>
							PC
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/Games?id=1323'>
							Playstation
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/xbox'>
							Xbox
						</NavLink>
					</li>
					<li>
						<NavLink exact to='/switch'>
							Switch
						</NavLink>
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

module.exports = Nav;