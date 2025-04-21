import React, { useEffect,useState } from 'react'
import axios from 'axios'

function View() {
  const[users,setUsers]=useState([]);
  useEffect(()=>{
    viewdata();
  },[])
  const viewdata=async()=>{
    const res=await axios.get('http://localhost/users');
    console.log(res);
    setUsers(res.data);
  }
  return (
    <div style={{border:'2px solid red'}}>
      <h1 style={{color:'green'}}>SHOW DATA</h1>
      <table style={{border:'2px solid red', backgroundColor:'green',width:'10 px'}}>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>AGE</th>
        </tr>
        {users.map((user)=>{
          <tr key={user.id}>
            <th>{user.id}</th>
            <th>{user.name}</th>
            <th>{user.age}</th>
          </tr>
        })}
      </table>
    </div>
  )
}

export default View