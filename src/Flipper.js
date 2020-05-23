import React, { Component } from 'react'
import './Flipper.css'
import Coin from './Coin'


class Flipper extends Component{
    render(){
        return(
            <div>
                <h2 className = 'Flipper-Header'>Lets Flip a coin</h2>
                <div className = 'Container'>
                    <Coin/>
                </div>
            </div>
            
        )
    }
}
export default Flipper;