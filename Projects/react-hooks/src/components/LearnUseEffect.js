import React, {useState, useEffect} from 'react'

function LearnUseEffect() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  /* useEffect takes 2 parameter, and the function(1st parameter) runs only when 
   the items inside the dependency array(2nd parameter) changes. 
   Basically, when we want a an effect in the component when any particular item 
   changes.*/

  const changeSize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', changeSize)
  }, []) 

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [resourceType])

  return (
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
      <br />
      <h1>{windowWidth}</h1>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre key={item.id}>{JSON.stringify(item)}</pre>
      } )}
    </div>
  )
}

export default LearnUseEffect
