// Put this componenet in index.js to learn useState

import React, {useState} from 'react';

const LearnUseState = () => {
  /* useState takes a default state value and return an array(2 items) of 
   current state and a function which update the current state. we need to use 
   function inside useState, otherwise it will run every time component render */
  const [count, setCount] =  useState( 4, console.log('run everytime componenet render'));
  const [theme, setTheme] = useState(() =>{
    console.log('run only first time component renders')
    return 'blue'
  })

  const decrementCount = () => {
    /* u can write setCount(count -1) but that is not preferred
    because if we run it twice, the decrement will only be one time, the 
    reason for that is both setCount are doing the exact same thing.*/ 
    setCount(prevCount => prevCount - 1)
    setTheme(() => 'red')
  }

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
    setTheme(() => 'blue')
  }

  return (
    <div className="app">
      <button onClick= {decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick= {incrementCount}>+</button>
    </div>
  );
}

export default LearnUseState;
