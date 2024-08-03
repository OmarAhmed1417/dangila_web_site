import React, {   useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,  faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import './style/main.css';
import { BrowserRouter as Router, Link,  } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Header = () => {
  const [userInfo, setUserInfo] = useState(null);
  let [open,setopen]=useState(false)
  let ref =useRef();

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



  let click=()=>{
    if(open===true){
      ref.current.style.transform = 'translateX(100%)';
      ref.current.style.transition = 'transform 0.5s ease';
      setopen(false);
    }
    else{
      ref.current.style.transform = 'translateX(0%)';
    ref.current.style.transition = 'transform 0.5s ease';
      setopen(true);
    }
  }







  
    return ( 
        <>

    <header className=" bg-main_color p-4 ">
        <div className="links container mx-auto flex justify-between items-center  ">
          <div>
        <b className="text-2xl font-bold text-title">dangila</b>
          </div>
          
        <Router >

        <nav>
          <ul className="flex space-x-9">
            <li><Link  to="/products" className="text-1xl font-semibold text-black link  p-1">Product</Link></li>
            <li><Link  to="/customers" className="text-1xl font-semibold text-black link p-1">Story</Link></li>
            <li><Link  to="/why" className="text-1xl font-semibold text-black link p-1">Manufacturing</Link></li>
            <li><Link  to="/about" className="text-1xl font-semibold text-black link p-1">packaging</Link></li>
            <li><Link  to="/slides" className="text-1xl font-semibold text-black link p-1">Team</Link></li>
          </ul>
        </nav>
        
        <div className="icons flex space-x-9">
        
       
        <div className='flex flex-col text-center'>

        <button onClick={() => login()} className='for'>       
           <FontAwesomeIcon icon={faUser}  className='text-black_color pl-3'  />
        </button>
        <div>
        {userInfo && <h5 className='text-brown_color font-bold pl-2'>Hello {(userInfo.name)}</h5>}
        </div>
        </div>
        
        </div>
        </Router>

      </div>



      <div className="link2 container mx-auto  justify-between items-center  ">
        
          <div>
        <b className="text-2xl font-bold text-title">dangila</b>
          </div>
          <div className='bar'>
          <FontAwesomeIcon icon={faBars} onClick={click} />
          </div>
      <div className="last"  ref={ref} onClick={click}>
          <div className="exit text-left ">
          <FontAwesomeIcon icon={faXmark} />
        </div>

        <Router >
        <div className="icons  space-x-9">
        
       
        <div className='flex flex-col text-center'>

        <button onClick={() => login()} className='for'>       
           <FontAwesomeIcon icon={faUser}  className='text-black_color pl-3'  />
        </button>
        <div>
        {userInfo && <h5 className='text-black font-bold pl-2'>Hello {(userInfo.name)} </h5>}
        </div>
        </div>
        
        </div>
        <nav>
          <ul className=" space-x-9">
            <li><Link  to="/products" className="text-1xl font-semibold text-black link  p-1">Product</Link></li>
            <li><Link  to="/why" className="text-1xl font-semibold text-black link p-1">Story</Link></li>
            <li><Link  to="/about" className="text-1xl font-semibold text-black link p-1">Manufacturing</Link></li>
            <li><Link  to="/customers" className="text-1xl font-semibold text-black link p-1">packaging</Link></li>
            <li><Link  to="/slides" className="text-1xl font-semibold text-black link p-1">Team</Link></li>
          </ul>
        </nav>
        
        
        </Router>
        </div>

      </div>
    </header>
  
        </>
     );
}
 
export default Header;