import React, {useState, useRef, useEffect} from 'react'

function LearnUseRef() {

  const [name, setName] = useState('')
  /* useRef returns an object: {current: defaultvalue(0 here)} 
  useRef doesnot re-render the whole component like state does.*/
  const renderCount = useRef(0)
  const prevName = useRef("")

  /* we are not doing useState because useEffect will run everytime component renders, and when 
  state changes the component re render and then useEffect will run again which inturn change the state
  and we will be stuck in an infinite loop. */
  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  // useRef persist values through rendering unlike state.
  useEffect(() => {
    prevName.current = name
  }, [name])

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <div>My Name is {name} and it used to be {prevName.current} . </div>
      <div>I render {renderCount.current} times .</div>
    </div>
  )
}

export default LearnUseRef
