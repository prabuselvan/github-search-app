import React from 'react';
import Input from '../Input';
import Button from '../Button';
import './searchComp.css';
class SearchComponent extends React.Component {

    onChange=(e)=> {
        console.log(e.target.value);
    }
    onClick=()=> {
        console.log('onClick  method');
    }
    render () {
        return (
            <div className='searchComp'>
                    <Input placeholder='... Search Keys' type='text' onChange={this.onChange} />
                    <div className='btn-group'>
                        <Button  value='USER' onClick={this.onClick}/>        
                        <Button  value='REPOSITORY' onClick={this.onClick}/>           
                    </div>
                    <div className='search-btn'>
                    <Button  value='SEARCH' onClick={this.onClick}/>        
                    </div>

            </div>
        )
    }
}
export default SearchComponent;