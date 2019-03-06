import React from 'react';
import Input from '../Input';
import Button from '../Button';
import DisplayLists from '../DisplayLists';
import './searchComp.css';
class SearchComponent extends React.Component {

    state={
        searchKeys: '',
        data : [],
        toDisplay: false,
        currentPage: 1,
        noofitems: 5
    }

    onChange=({target:input})=> {
        // console.log(input.name);
        this.setState({
            searchKeys:input.value
        });
    }
    onClick=({target: input})=> {
        console.log('onClick  method');
        console.log(input.name);
    }

    async fetchValues (searchKeys) {
        await fetch(`https://api.github.com/users/${searchKeys}/repos`)
            .then((res)=> res.json())
            .then((data)=> {
                console.log('data is ',data);
                this.setState({data: data}, ()=>{ console.log(this.state.data)});
                // return res;
            })
            .catch((err)=> {
                console.log('api error is ', err);
            })
    }

      submitSearch=(e)=> {
        e.preventDefault();
        const {searchKeys}= this.state;
          if (searchKeys) {
              this.fetchValues(searchKeys);
              this.setState({toDisplay: true})
          } else {
            this.setState({toDisplay: false})
              return 'No Users Found';
          }
    }

    viewRepos=()=> {
        console.log('This is View Repos');
    }
    render () {
        const {searchKeys, toDisplay, data, currentPage, noofitems} = this.state;
        return (
            <div className='searchComp' >
                    <Input placeholder='... Search Keys' type='text' name='search' onChange={this.onChange} value={searchKeys} />
                    <div className='btn-group'>
                        <Button  value='USER' name='User' onClick={this.onClick}/>        
                        <Button  value='REPOSITORY' name='Repository' onClick={this.onClick}/>           
                    </div>
                    <div className='search-btn'>
                    <Button  value='SEARCH' name='Search' onClick={this.submitSearch}/>        
                    </div>

             {toDisplay && <DisplayLists data={data} toDisplay={toDisplay} viewRepos={this.viewRepos} currentPage={currentPage} noofitems={noofitems} />}

            </div>
        )
    }
}
export default SearchComponent;