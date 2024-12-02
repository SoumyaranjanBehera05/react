/* conditional rendering */


// //conditional rendering = allows you to control  what gets rendered in your applications based on certain conditions (show,hide,or change components)

// import UserGreeting from "./UserGreeting"

// function App() {

//   return (
//     <>
//         <UserGreeting isLoggedIn = {true} username = "Soumya"/>
//     </>
//   )
// }

// export default App




//This is render list

import List from "./List"

function App() {

  const fruits = [{ id: 1, name: "apple", calories: 95 },
                    { id: 2, name: "Orange", calories: 45 },
                    { id: 3, name: "Banana", calories: 105 },
                    { id: 4, name: "Coconut", calories: 159 },
                    { id: 5, name: "pineapple", calories: 37 }];
  return (
    <>
      <List items={fruits} category="Fruits"/>
    </>
  )
}
export default App