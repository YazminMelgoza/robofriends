import React, { Component } from 'react';
import './Hello.css';
class Hello extends Component {
    render() {
        return(
            <div className='tc'>
                <h1>Hello World</h1>
                <p>Welcome to react!!</p>
            </div>
        );
    }
}

export default Hello;
// If we use default it means we are exporting just one
// Single component from this file