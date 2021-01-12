import React, {useState} from 'react'
import ClassContextComponent from './ClassContextComponent'
import FunctionContextComponent from './FunctionContextComponent'
export const ThemeContext = React.createContext()

function LearnUseContext() {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(prevTheme => !prevTheme)
  }

  return (
    <div>
      {/* Every component inside provider has access to the value of provider
      i.e, darkTheme. It is like a global state for all the children component. */}
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent />
        <ClassContextComponent />
      </ThemeContext.Provider>
    </div>
  )
}

export default LearnUseContext
