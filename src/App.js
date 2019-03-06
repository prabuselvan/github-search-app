import React, { Component } from 'react';
import Header from '../src/components/Header';
import SearchComponent from '../src/components/SearchComponent';
import DisplayLists from '../src/components/DisplayLists';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
               <Header mainHeading='Git Hub Search App'/>  
               <SearchComponent/>
               <DisplayLists/>
      
        </div>
    );
  }
}

export default App;
