import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            userName: '',
            password: ''
        }
    }
    render() {
        return (
            <div>
                UserName: <input onChange={(e) => { this.setState({ userName: e.target.value }) }} value={this.state.userName}></input>
                Password: <input onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password}></input>
                <button onClick={(e) => { alert('UserName: ' + this.state.userName + ' Password: ' + this.state.password) }}>Login</button>
            </div>
        )
    }
}

export default Login