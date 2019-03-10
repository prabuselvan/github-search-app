import React from 'react';
import Header from '../Header'
import SearchComponent from '../SearchComponent';
import DisplayLists from '../DisplayLists';
const GithubComponent = ()=> {
    return(
        <div>
               <Header mainHeading='Git Hub Search App'/>  
               <SearchComponent/>
               <DisplayLists/>
        </div>
    )
};
export default GithubComponent;
