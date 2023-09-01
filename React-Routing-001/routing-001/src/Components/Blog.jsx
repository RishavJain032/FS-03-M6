import React from 'react'
// import './style.css';
import {Link} from 'react-router-dom'
import { BsInboxesFill } from 'react-icons/bs'
function Blog() {
  return (
    <div style={{display:"flex", justifyContent:"space-between", padding:"30px", height:"30%", }}>
        <div style={{fontSize:"36PX"}}>
            <BsInboxesFill/>
        </div>
        <div style={{width:"50%", display:"flex", justifyContent:"space-evenly"}}>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/project'>Project</Link>
           <Link to='/service'>Service</Link>
           <Link to='/contact'>Contact</Link>
        </div>
        <div>
            <button style={{height:"40px", width:"160px", borderRadius:"20px", color:"white", backgroundColor:"#2B4EDB", cursor:"pointer"}}>Enquire now</button>
        </div>
    </div>
  )
}

export default Blog