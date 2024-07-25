import React from 'react';
const Header = () => {
    return ( 
        <>
            <header className="bg-blue-600 lg:text-white p-4 sm:text-slate-800">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav>
          <ul className="flex space-x-">
            <li><a href="#home" className="hover:text-gray-200">Home</a></li>
            <li><a href="#about" className="hover:text-gray-200">About</a></li>
            <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
        </>
     );
}
 
export default Header;