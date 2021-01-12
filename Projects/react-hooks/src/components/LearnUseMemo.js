import React, {useState, useMemo, useEffect} from 'react'

function LearnUseMemo() {

  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)

  /* this slow Function runs everytime we re-render the component
  by chaging state. To solve this we can do the useMemo hooks where
  memo stands for memoization(caching). */
  const slowFunction = (num) => {
    for (let i=0; i <=1000000000; i++) {}
    console.log('Slow function Done')
    return num + 2
  }

  /* useMemo will only run the slowFunction when we change the number{dependency list}, and now
  if we change the state of theme , it will be instantanoeus.
  useMemo is caching the output of slowFunction. if number changes, then the output
  of slowFunction changes, hence we need to run it at that time. */ 
  const doubleNumber = useMemo(() => {
    return slowFunction(number)
  }, [number]) 

  // Why not do useEffect then?? 
  /* ^continue... so if we do useMemo in themeStyle, it caches the value
  and now if we only changes the number, the themeStyle reference remains the same and hence useEffect
  will not run the function .*/ 
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black'
    }
  }, [dark]) 

  /*If we remove useMemo from themeStyle, then useEffect will run the
  function even if we change the number(state) , that is because use effect
  runs when themeStyle changes and when number changes, it re-render the component and
  themeStyle is an Object, so in JS objects and arrays even if they have exactly same value, refers
  to different location in memory, and new themeStyle after rendering is different from the old one, hence
  useEffect will run the function. Continue reading above ...^*/
  useEffect(() => {
    console.log('Theme Changed')
  }, [themeStyles])

  return (
    <div>
      <input type="number" value={number} 
        onChange={e => setNumber(parseInt(e.target.value))} 
      /> 
      <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

export default LearnUseMemo
