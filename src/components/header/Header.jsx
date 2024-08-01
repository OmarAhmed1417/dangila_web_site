import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import './style/main.css';
import { BrowserRouter as Router, Link,  } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Header = () => {
  const [userInfo, setUserInfo] = useState(null);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenResponse.access_token}`);
        setUserInfo(res.data);
      } catch (err) {
        console.error('Error fetching user info', err);
      }
    },
    onError: () => console.log('Login Failed'),
  });

    return ( 
        <>

    <header className=" bg-main_color p-4 ">
        <div className="container mx-auto flex justify-between items-center ">
        <b className="text-2xl font-bold text-title">dangila</b>
        <Router>

        <nav>
          <ul className="flex space-x-9">
            <li><Link  to="/" className="text-1xl font-semibold text-black link  p-1">Product</Link></li>
            <li><Link  to="/" className="text-1xl font-semibold text-black link p-1">Story</Link></li>
            <li><Link  to="/" className="text-1xl font-semibold text-black link p-1">Manufacturing</Link></li>
            <li><Link  to="/" className="text-1xl font-semibold text-black link p-1">packaging</Link></li>
            <li><Link  to="/" className="text-1xl font-semibold text-black link p-1">Team</Link></li>
          </ul>
        </nav>
        
        <div className="icons flex space-x-9">
        
        <Link>
        <FontAwesomeIcon icon={faTrash}  className='text-black_color pl-3'/>
        </Link>
        <div className='flex flex-col text-center'>

        <button onClick={() => login()}>       
           <FontAwesomeIcon icon={faUser}  className='text-black_color pl-3'  />
        </button>
        <div>
        {userInfo && <h5 className='text-brown_color font-bold pl-2'>Hello {(userInfo.name)}</h5>}
        </div>
        </div>
        
        </div>
        </Router>
      </div>
    </header>
  
        </>
     );
}
 
export default Header;