import React,{Component} from 'react'
import ReactRouter, {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';



import api from '../api/api';

import Nav from './nav';
import GameView from './game-view';
import Home from'./home';
import Search from './search';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchResult:null,
      redirect:false
    }
    this.search= this.search.bind(this);
  }

  search(term,type){
    api.searchElements(term,type)
      .then((searchResult)=>{
        console.log(searchResult);
        this.setState({searchResult});
      })
      .catch((e)=>{
        console.log(e);
      })
  }

  render() {


    return (
      <Router>
        <div>
          <Nav executeSearch={this.search}/>
          <Switch>
            
            <Route exact path='/' component={Home}/>
            <Route path='/games' component={GameView}/>
            <Route path='/search' component={Search}/>

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