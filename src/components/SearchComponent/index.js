import React from 'react';
import Input from '../Input';
import Button from '../Button';
import DisplayLists from '../DisplayLists';
import UserDetails from '../UserDetails';
import {Paginate} from '../Utils/Paginate';
import './searchComp.css';
let url = 'https://api.github.com/users/';
class SearchComponent extends React.Component {

    state={
        searchKeys: '',
        data : [],
        toDisplayRepo: false,
        toDisplayUser: false,
        currentPage: 1,
        noofitems: 5,
        count:0,
        button: {
            user:false,
            repository: true
        }
    }

    componentDidMount() {
        const {searchKeys} =this.state;
        url = `${url}${searchKeys}`;
        console.log('component did update ', url);
        
    }
  

    onChange=({target:input})=> {
        // console.log(input.name);
        this.setState({
            searchKeys:input.value
        });
    }
    onClick=({target: input})=> {
        const button = {...this.state.button};
        const {searchKeys, count}= this.state;
        console.log('searchkey is ', searchKeys);
        console.log('button is ', button);
        console.log('onClick  method');
        console.log(input.name);
        if(input.name === 'User') {
                button.user=true;
                button.repository=false;
                url=`https://api.github.com/users/${searchKeys}`;


                
        } else if(input.name=== 'Repository') {
            button.repository=true;
            button.user=false;
            url=`https://api.github.com/users/${searchKeys}/repos`;
            
        } else  {
            return;
        }
        this.setState({
            button, 
            count :  count+1
        }, ()=> {
            console.log(this.state.button);
        })
    }

    async fetchValues () {
        // console.log('current button url is ', url);
        // console.log('search Keys are' , searchKeys);
        // let startingurl = this.getUrl();
        // console.log('starting url ', startingurl);

        const button = {...this.state.button};
        const {searchKeys, count}= this.state;

        if (count===0) {
            url=`${url}${searchKeys}/repos`
        }
     
        await fetch(url)
            .then((res)=> res.json())
            .then((data)=> {
                console.log('data is ',data);
                this.setState({data: data}, ()=>{  console.log('Response from server ', this.state.data)});
                // return res;
            })
            .catch((err)=> {
                console.log('api error is ', err);
            })
    }

      submitSearch=(e)=> {
        e.preventDefault();
        const {searchKeys, button}= this.state;
        console.log('searech Keys are  ', searchKeys);
          if (searchKeys) {
              this.fetchValues(searchKeys);
             if(button.repository) {
                 console.log('current state of button is ',this.state.button);
                 this.setState({ 
                                    toDisplayRepo: true,
                                    toDisplayUser:false
                                });
             } else if (button.user) {
                this.setState({
                                toDisplayUser: true,
                                toDisplayRepo: false});
             }
          } else {
            this.setState({
                            toDisplayRepo: false,
                            toDisplayUser: false
                        })
              return 'No Users Found';
          }
    }

    // viewRepos=()=> {
    //     console.log('This is View Repos');
    // }
    onPageChange=(page)=>{
        console.log('clicked page is ', page);
        this.setState({currentPage: page});
    }
    render () {
        const {searchKeys, toDisplayRepo,toDisplayUser, data, currentPage, noofitems, button} = this.state;
        const {length: count} = this.state.data;
        const repositories = Paginate(data, currentPage,noofitems);
        return (
            <div className='searchComp' >
                    <div className='inputbox'>

                    <Input placeholder='... ßSearch Keys' type='text' name='search' onChange={this.onChange} value={searchKeys} />
                    </div>
                    <div className='btn-group'>
                        <Button  value='USER' name='User' onClick={this.onClick} disabled={button.user}/>        
                        <Button  value='REPOSITORY' name='Repository' onClick={this.onClick} disabled={button.repository}/>           
                    </div>
                    <div className='search-btn'>
                    <Button  value='SEARCH' name='Search' onClick={this.submitSearch}/>        
                    </div>


             {toDisplayRepo && <DisplayLists data={repositories} count={count} toDisplayRepo={toDisplayRepo} viewRepos={this.viewRepos} currentPage={currentPage} noofitems={noofitems} onPageChange={this.onPageChange} />}

            {toDisplayUser && <UserDetails data={data}/>}
            </div>
        )
    }

    // getUrl =()=> {
    //     const {searchKeys} =this.state;
    //     url = `${url}${searchKeys}`;
    //     console.log('first time url ', url);
    //     return url;
    // }

}
export default SearchComponent;