import React from 'react';
import '../stylesheets/ClearButton.css'

const ClearButton = (props) => (

    <button
    className='clear__button'
    onClick={props.manejarClear}>
        {props.children}
    </button>
);

export {ClearButton};