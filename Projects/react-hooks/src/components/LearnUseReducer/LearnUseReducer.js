// Put this componenet in index.js to learn useState

import React, {useState, useReducer} from 'react';
import Todo from "./Todo";

export const ACTIONS = {
  ADD_TODO : 'ADD_TODO',
  TOGGLE_TODO : 'TOGGLE_TODO',
  DELETE_TODO : 'DELETE_TODO'
}

const reducer = (todos, action) => {
  switch (action.type) {

    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]

    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete }
        }
        return todo
      })

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)

    default: 
      return todos
  }
}

const newTodo = (name) => {
  return {id: Date.now(), name: name, complete: false}
}

const LearnUseReducer = () => {
  /* useReducer is similar to useState, it returns the current state
  and dispatch which is used to update our state. 
  useReducer is like the combo of Redux and useState. We don't need 
  to worry about prop drilling of the state with useReducer. */ 
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
    setName('')
  }

  console.log(todos)

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo = {todo} dispatch = {dispatch} />
      })}
    </div>
  );
}

export default LearnUseReducer;
