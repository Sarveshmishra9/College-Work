// import React from 'react'
// import axios from 'axios'


// const Register=()=> {
//     const handleresister=async(e)=>{
//         e.preventDefault()
//         const user={
//             name:e.target.name.value,
//             age:e.target.age.value
//         }
//         await axios.post(,user)
//         alert("user sucessfully register")
//     }
//   return (
//     <div>
//         <h1>Register Sudents</h1>
//         <form onSubmit={handleresister}>
//             <label > Name:</label><input type='text' name='name'/>
//             <label > Age:</label><input type='text' name='age'/>
//             <button type='submit'>Register</button>
//         </form>
//     </div>
//   )
// }

// export default Register
import React from 'react'
import axios from 'axios'

function Register() {
    const sar=async(e)=>{
                e.preventDefault()
                const user={
                    name:e.target.name.value,
                    age:e.target.age.value
                }
                await axios.post('http://localhost:3000/users',user)
                alert("user sucessfully register")
            }
  return (
    <div style={{border:'2px solid green',padding:'10px'}}>
        <h1 style={{color:'green'}}>CREATE USERS</h1>
        <form onSubmit={sar}>
        <label > Name:</label><input type='text' name='name'/>
//             <label > Age:</label><input type='text' name='age'/>
//             <button type='submit'>SAVE DATA</button>
        </form>
    </div>
  )
}

export default Register