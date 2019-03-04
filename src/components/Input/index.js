import React from 'react';
import './input.css';
const Input =({type,placeholder, onChange})=> {
    return(
        <div>
            <input className='inputbox' type={type} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default Input;