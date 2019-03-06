import React from 'react';
import './input.css';
const Input =({type,placeholder, name, onChange})=> {
    return(
        <div>
            <input className='inputbox' type={type} placeholder={placeholder} name={name} onChange={onChange}/>
        </div>
    )
}

export default Input;