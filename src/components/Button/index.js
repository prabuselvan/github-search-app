 import React from 'react';
import propTypes from 'prop-types';
import './button.css';
 const Button =({value, onClick})=> {
     return (
            <div>
                <button type='button' className='btn btn-primary button' onClick={onClick}> {value} </button>
            </div>
     )
 }

 Button.propTypes = {
     value: propTypes.string,
     onClick: propTypes.func.isRequired
 }

 export default Button;