//React hook = Specifical function that allows functional components to use React features without writting class components (React v16.8)(useState,useEffect,useContext,useReducer,useCallback , and more..)


//useState() = A React hook that allows the creation of a stateful variable and a setter function to update its value in the virtual DOM.[name,setName]

import MyComponent from "./myComponent"
import Counter from "./Counter"

function App() {

  return (
    <>
    <Counter/>
    {/* <MyComponent/> */}
    </>
  )
}

export default App
