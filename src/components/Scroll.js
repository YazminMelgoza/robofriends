import React from 'react';
// props
// state 
// children


const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '40rem'}}>
            {props.children}
        </div>
    )
}

export default Scroll;