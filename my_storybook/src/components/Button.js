import React from 'react'
import './Button.css';

function Button(props){
    const { variant='primary',childrean, ...rest} = props
    return(

        <button className={`button ${variant}`} {...rest}>
        {children}
        </button>
    )
}

export default Button;