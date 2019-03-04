import React from 'react';
import './Header.css';
const Header = ({mainHeading})=> {
    return (
       <div>
           <h1 className='mainHeader'> {mainHeading} </h1>
       </div>
    )
}

export default Header;