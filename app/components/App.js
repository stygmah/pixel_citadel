import React from 'react'
import ReactRouter, {BrowserRouter, Route, Switch} from 'react-router-dom';
var Router = BrowserRouter;

import Nav from './nav';
import GameView from './game-view';
import Home from'./home';



class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/games' component={GameView}/>
          </Switch>
        </div>
      </Router>
    )
  }
  componentDidMount() {
    document.title = 'Pixel Citadel';
  }
}

module.exports = App;