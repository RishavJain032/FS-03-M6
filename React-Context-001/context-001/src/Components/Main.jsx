import React from 'react';
import { Link } from 'react-router-dom';
function Main() {
  return (
    <div id='nav'>
        <Link to='/'>HOME</Link>
        <Link to='/contact'>CONTACT</Link>
        <Link to='/service'>SERVICE</Link>
    </div>
  )
}

export default Main