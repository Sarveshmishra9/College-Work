// import './App.css'
// // import Card from"./components/Card.jsx"
// import './Sate3.jsx'
// // import girl  from  "./img/girl.jpg"
// // function App() {

// //   return (
// //     <div  className="app">
// //     {/* <Card/>
// //     <Card/>
// //     <Card/> */}
// //     <Card name="Pooja Manral" img={girl}
// //     roll="202224872"/>
// //     </div>
// //   )
// // }
// export default App
// import './App.css';
// import Card from "./components/Card";
// import img1 from './img/flower.jpg'; 
// import img2 from './img/girl.jpg';
// import img3 from './img/scene.jpg';

// function App() {
//   return (
//     <>
//       <h1>Cards</h1>
//       <div className="container">
//         <Card name="Neha" img={img1} roll="1" date={new Date()} />
//         <Card name="Ishaan" img={img2} roll="2" date={new Date()} />
//         <Card name="Vansh" img={img3} roll="3" date={new Date()} />
//         <Card name="Khushi" img={img1} roll="4" date={new Date()} />
//         <Card name="Ajay" img={img2} roll="5" date={new Date()} />
//         <Card name="Priya" img={img3} roll="6" date={new Date()} />
//       </div>
//     </>
//   );
// }

// export default App;




// // import React from 'react'
// // import State3 from './components/state3'

// // const App = () => {
// //   return (
// //     <div><State3/></div>
// //   )
// // }

// export default App
// import React ,{useState}from 'react'
// import {BrowserRouter,Routes, Route} from "react-router-dom";
// import MainLayout from './components/MainLayout.jsx';
// import Login from './components/Login ';
// import Dashboard from './components/Dashboard';
// import Registration from './components/Registration.jsx';
//  const App = () => {
//   const[store, setstore]=useState("");
//   return (
//     <div>
//    <pre>{JSON.stringify(store,null,2)}</pre>
//     <BrowserRouter>
//     <Routes>
//     <Route path="/" element={<MainLayout/>}/>
//     <Route path="/login"element={<Login  regDataLogin={store}/>}/>
//     <Route path="/registration"element={<Registration regData={setstore}/>}/>
//     <Route path="/dashboard"element={<Dashboard/>}/>
//     </Routes>
    
//     </BrowserRouter>
//     </div>
//   )
// }

// export default App



// import React from "react";
// import Map from "./component/Map";

// function App() {
//     return (
//         <div>
//             <h1 style={{ textAlign: "center", margin: "20px 0" }}>Movies List</h1>
//             <Map />
//         </div>
//     );
// }

// export default App;

import React from 'react';
import UseRef from './component/UseRef.jsx';

function App() {
   return (
         
         <UseRef />
   );
}

export default App


