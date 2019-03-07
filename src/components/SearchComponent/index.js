import React from 'react';
import Input from '../Input';
import Button from '../Button';
import DisplayLists from '../DisplayLists';
import {Paginate} from '../Utils/Paginate';
import './searchComp.css';
class SearchComponent extends React.Component {

    state={
        searchKeys: '',
        data : [],
        toDisplay: false,
        currentPage: 1,
        noofitems: 5,
        button: {
            user:false,
            repository: false
        }
    }

    onChange=({target:input})=> {
        // console.log(input.name);
        this.setState({
            searchKeys:input.value
        });
    }
    onClick=({target: input})=> {
        const button = {...this.state.button}
        console.log('button is ', button);
        console.log('onClick  method');
        console.log(input.name);
        if(input.name === 'User') {
                button.user=true;
        } else if(input.name=== 'Repository') {
            button.repository=true;
        }
        this.setState({
            button
        })
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
    onPageChange=(page)=>{
        console.log('clicked page is ', page);
        this.setState({currentPage: page});
    }
    render () {
        const {searchKeys, toDisplay, data, currentPage, noofitems, button} = this.state;
        const {length: count} = this.state.data;
        const repositories = Paginate(data, currentPage,noofitems);
        return (
            <div className='searchComp' >
                    <div className='inputbox'>

                    <Input placeholder='... ßSearch Keys' type='text' name='search' onChange={this.onChange} value={searchKeys} />
                    </div>
                    <div className='btn-group'>
                        <Button  value='USER' name='User' onClick={this.onClick} disabled={button.user}/>        
                        <Button  value='REPOSITORY' name='Repository' onClick={this.onClick}/>           
                    </div>
                    <div className='search-btn'>
                    <Button  value='SEARCH' name='Search' onClick={this.submitSearch}/>        
                    </div>

             {toDisplay && <DisplayLists data={repositories} count={count} toDisplay={toDisplay} viewRepos={this.viewRepos} currentPage={currentPage} noofitems={noofitems} onPageChange={this.onPageChange} />}

            </div>
        )
    }
}
export default SearchComponent;