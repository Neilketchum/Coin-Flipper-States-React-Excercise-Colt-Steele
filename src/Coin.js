import React, { Component } from 'react'
import DisplayCoin from './DisplayCoin'
class Coin extends Component{
    constructor(props)
    {
            super(props)
            this.state = {
                head : 0,
                tail : 0,
                curr_face : 0
            }
            this.Flip = this.Flip.bind(this)
    }
    Flip(){
        console.log('Flip')
        let indx = Math.round(Math.random())
        if(indx === 1){
            this.setState({
                head:this.state.head + 1,
                curr_face:1
            })
            }else{
                this.setState({
                    tail:this.state.tail + 1,
                    curr_face:0
                })
            
            }
        
    }

    render(){      
        return(
            <div>
              


               <DisplayCoin index = {this.state.curr_face}/>


                <p>No of Heads {this.state.head} and number of tail is {this.state.tail}</p>





                <button className ='Coin-btn' onClick ={this.Flip}> Lets Flip </button>   
            </div>


        )

    }
}
export default Coin;