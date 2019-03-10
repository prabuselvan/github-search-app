import { BrowserRouter } from 'react-router-dom';
import { Switch,  Route } from 'react-router-dom';
import React, { Component } from 'react';
import Repo from '../src/components/RepositoryPage';
import GithubComponent from '../src/components/GithubComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
                  <Route path='/' exact component={GithubComponent}/>
                  {/* <Route path='/repository' exact render={(props)=> <Repo repoName ={repoName}/>}/> */}
                  <Route path='/repository' exact component={Repo}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
