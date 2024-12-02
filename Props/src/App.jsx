
//props = read-only properties that are shared between components. A parent component can send data to a child component. <Component key = vale />
//default props = default values for props in case they are n't passed from the parent component .

import Student from "./Student"

function App() {

  return (
    <>
      <Student name = "Soumya" age = {19} isStudent = {true}/>
      <Student name = "Patrick" age = {21} isStudent = {false}/>
      <Student name = "Squidward" age = {51} isStudent = {false}/>
      <Student name = "Sandy" age = {22} isStudent = {true}/>
      <Student name = "pattcumins"/>

    </>
  )
}

export default App
