import React from 'react'

export default function Todo(props){
    return(
        <input onChange={(e)=>{props.updateValue(e.target.value)}} value={props.value}></input>
    )
}