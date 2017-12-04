import React from 'react'

export default function Todo(props){
    return(
        <ul>
            {props.todos.map(todo => <li key={todo}>{todo}</li>)}
        </ul>
    )
}