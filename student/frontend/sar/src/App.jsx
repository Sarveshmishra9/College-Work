//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
// import './App.css'
// import View from './components/View'
// import Register from './components/Register'
// import Update from './components/Update'
// import Delete from './components/Delete'

// function App() {

//   return (
//     <div>
//       <View/>
//       <Register/>
//       <Update/>
//       <Delete/>
//     </div>
//   )
// }

// export default App
// import './App.css'
// import Register from './components/Register'
// import View from './components/View'


// function App() {

//   return (
//     <div>
//       <h1>CRUD FUNCTION</h1>
//       <Register/>
//       <View/>
//     </div>
//   )
// }

// export default App
import React from 'react'
import Register from './components/Register'
import View from './components/View'
import Update from './components/Update'
import Delete from './components/Delete'
import './App.css'
const App = () => {
  return (
    <div>
      <h1 style={{backgroundColor: 'greenyellow',height:'50px',lineHeight:'50px'}}>User Registration System</h1>
      <Register/>
      <Update/>
      <Delete/>
      <View/>
    </div>
  )
}

export default App