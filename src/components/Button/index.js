 import React from 'react';
import propTypes from 'prop-types';
import './button.css';
 const Button =({value, name, onClick})=> {
     return (
            <div>
                <button type='button' className='btn btn-primary button'  name={name} onClick={onClick}> {value} </button>
            </div>
     )
 }

 Button.propTypes = {
     value: propTypes.string,
     onClick: propTypes.func.isRequired
 }

 export default Button;