import React, {Component} from 'react'

class View extends Component{
    render(){
        var listItems = this.props.values.map(value => <li><h2>{value}</h2></li>)
        return(
            <div>
                {listItems}
            </div>
        )
    }
}

export default View;