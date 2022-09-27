import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = ({user, setUser}) => {

    const handleLogout = () => {
        fetch("/logout", {method:"DELETE"}).then((r)=>{
            if(r.ok) {
                setUser(null)
            }
        });
    }

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/"> Home </Link></li>
          <li><Link to="/assignments"> List Assignments </Link></li>
          <li><Link to="/assignments/new"> Create Assignments </Link></li>
          <button onClick={handleLogout}>Not {user}?</button>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar