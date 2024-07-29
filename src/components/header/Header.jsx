import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import './style/main.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
const Header = () => {
    return ( 
        <>

    <header className=" bg-main_color p-4 ">
        <div className="container mx-auto flex justify-between items-center ">
        <b className="text-2xl font-bold text-title">dangila</b>
        <Router>

        <nav>
          <ul className="flex space-x-9">
            <li><Link to="/" className="text-1xl font-semibold text-black  p-1">Product</Link></li>
            <li><Link to="/" className="text-1xl font-semibold text-black p-1">Story</Link></li>
            <li><Link to="/" className="text-1xl font-semibold text-black p-1">Manufacturing</Link></li>
            <li><Link to="/" className="text-1xl font-semibold text-black p-1">packaging</Link></li>
            <li><Link to="/" className="text-1xl font-semibold text-black p-1">Team</Link></li>
          </ul>
        </nav>
        <div className="icons flex space-x-9">
        <FontAwesomeIcon icon={faTrash}  className='text-black_color pl-3'/>
        <FontAwesomeIcon icon={faUser}  className='text-black_color pl-3'/>
        </div>
        </Router>
      </div>
    </header>
  
        </>
     );
}
 
export default Header;