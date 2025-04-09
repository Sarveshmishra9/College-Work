import React from 'react'
import "./MainLayout.css"
import { Link, Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div><h2>Welcome to Home Page</h2>
    
    <nav>
        <ul className='aa'>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/registration">Registration</Link></li>
        </ul>

    </nav>
    <Outlet/>
    
    </div>
  )
}

export default MainLayout