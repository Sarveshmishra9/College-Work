import React from 'react'

const Delete=()=> {
    const handledelete=async(e)=>{
        e.preventDefault()
        const id=e.target.id.value
        await axios.delete(/${id})
        alert("delete successfully")
    }
  return (
    <div>
        <h1>Delete user</h1>
        <form onSubmit={handledelete}>
            <input type="text" placeholder="Enter product Id" name="id"/>
            <button type='submit'>Delete</button>
        </form>
    </div>
  )
}

export default Delete