import React from 'react'
// import img from "../img/sarvesh.jpg";
import "../component/card.css"
const card = (props) => {
  return (
    // <div>
    //     <h2> Sarvesh Mishra</h2>
    //     <img src={img} alt="sarvesh" />
    //     <h2>Roll. Number:02719</h2>
    // </div>
<div className='card'>
<h2>{props.name}</h2>
<img src={props.img}alt="sarvesh"/>
<h2>{props.img}</h2>
 </div>
  )
}

export default card