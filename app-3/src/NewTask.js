import React from 'react'

export default function NewTask(props){
    return(
        <button onClick={()=>{props.addTask()}}>Add</button>
    )
}