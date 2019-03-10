 import React from 'react';
import propTypes from 'prop-types';
import './button.css';
 const Button =({value, name, onClick, disabled})=> {
     return (
            <div>
                <button type='button' className='btn btn-primary button'  name={name} onClick={onClick} disabled={disabled}> {value} </button>
            </div>
     )
 }

 Button.propTypes = {
     value: propTypes.string,
     onClick: propTypes.func.isRequired
 }

 export default Button;