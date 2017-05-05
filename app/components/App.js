var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var GameView = require('./GameView');
var Home = require('./Home');



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