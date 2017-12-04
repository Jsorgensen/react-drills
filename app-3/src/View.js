import React, {Component} from 'react'

class View extends Component{
    constructor(){
        super()
        this.state = {
            filter: '',
            values : [
                'Mike',
                'Emily',
                'Emma',
                'Katie',
                'Scott',
                'Michelle',
                'Halley',
                'Jane'
            ]
        }
    }
    render(){
        var list = this.state.values.filter(value => (value + '').match(this.state.filter)).map(value => <h2 key={value}>{value}</h2>)
        return(
            <div>
                <input onChange={(e)=>{this.setState({filter: e.target.value})}}></input>
                {list}
            </div>
        )
    }
}

export default View