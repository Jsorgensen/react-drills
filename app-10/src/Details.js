import React, {Component} from 'react'

import axios from 'axios'

class Details extends Component{
    constructor(){
        super()
        this.state = {
            item: {}
        }
    }

    componentDidMount(){
        axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`).then(res => {
            console.log(res);
            this.setState({item: res.data})
        }).catch((e) => {
            console.log(e);
        })
    }

    render(){
        return(
            <div>
                <h1>Title: {this.state.item.title}</h1>
                <img src={this.state.item.image} className='image'></img>
                <h4>Price: ${this.state.item.price}</h4>
                <p>Description: {this.state.item.desc}</p>
                <p>Category: {this.state.item.category}</p>
                <p>Company: {this.state.item.company}</p>
            </div>
        )
    }
}

export default Details