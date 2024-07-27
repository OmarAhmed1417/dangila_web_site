import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import './style/main.css'
const Header = () => {
    return ( 
        <>

    <header className=" bg-main_color p-4 ">
        <div className="container mx-auto flex justify-between items-center ">
        <b className="text-2xl font-bold text-title">dangila</b>
        <nav>
          <ul className="flex space-x-9">
            <li><a href="#home" className="text-1xl font-semibold text-black  p-1">Product</a></li>
            <li><a href="#about" className="text-1xl font-semibold text-black p-1">Story</a></li>
            <li><a href="#contact" className="text-1xl font-semibold text-black p-1">Manufacturing</a></li>
            <li><a href="#contact" className="text-1xl font-semibold text-black p-1">packaging</a></li>
            <li><a href="#contact" className="text-1xl font-semibold text-black p-1">Team</a></li>
          </ul>
        </nav>
        <div className="icons flex space-x-9">
        <FontAwesomeIcon icon={faTrash}  className='text-black_color pl-3'/>
        <FontAwesomeIcon icon={faUser}  className='text-black_color pl-3'/>
        </div>
      </div>
    </header>
  
        </>
     );
}
 
export default Header;