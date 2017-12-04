import React, {Component} from 'react'

class View extends Component{
    constructor(){
        super()
        this.state = {
            value: ''
        }
    }
    render(){
        return(
            <div>
                Input Stuff: <input onChange={(e)=>{this.setState({value: e.target.value})}} value={this.state.value}></input>
                <div>{this.state.value}</div>
            </div>
        )
    }
}

export default View;