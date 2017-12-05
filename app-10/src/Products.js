import React, {Component} from 'react'
import './App.css'

import axios from 'axios'
import {Link} from 'react-router-dom'

class Product extends Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get('https://practiceapi.devmountain.com/products').then(res => {
            console.log(res);
            this.setState({products: res.data})
        }).catch((e) => {
            console.log(e);
        })
    }

    render(){
        var images = this.state.products.map(product => <Link to={`/details/${product.id}`} key={product.id} ><img src={product.image} alt='stuff' className='image'></img></Link>)
        return(
            <div>
                {images}
            </div>
        )
    }
}

export default Product