import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
   const[open,setOpen] = useState(false)

      const toggle =()=>{
        setOpen(!open)
      }

       const location = useLocation()

       useEffect(()=>{

        setOpen(false)

       },[location])


  return (
  
    <div className='navigation'>
        <div className="navigation-bar">
        <div className="logo">
            <h2 className="logoHead">softcom</h2>
        </div>
       
        <nav id={open ? "hidden" : null}> 
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Courses">Courses</Link>
 
        <Link to="/Registration">Students Registration</Link>
        <Link to="/Contact">Contact</Link>
     </nav>
     <i className='fa fa-bars' onClick={toggle}></i>
     </div>
    </div>
  )
}

export default Navbar
