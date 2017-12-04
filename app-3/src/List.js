import React from 'react'

export default function List(props){
    return(
        <ul>
            {props.todos.map(todo => <li>{todo}</li>)}
        </ul>
    )
}