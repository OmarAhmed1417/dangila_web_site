import React, { useRef, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/mainsection/Main';
import Customers from './components/Customers/Customer';
import Why from './components/Why_dangila/Why';
import About from './components/About_section/About';
import Products from './components/Prouducts/Prouducts';
import Slides from './components/Slide/Slide';
import Footer from './components/Footer/Footer';
import Not from './components/Not Found/Not';
import Apper from './components/Surces/Apper';
import { Provider } from 'react-redux';
import store from './components/Rediux/data_store/Store';
import ProductListPage from './components/Rediux/Proudct/ProductListPage ';
import CartPage from './components/Rediux/Cards/CartPage';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightToBracket, faXmark, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [open, setOpen] = useState(false);
  const ref = useRef();

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

  const logout = () => {
    googleLogout();
    setUserInfo(null);
  };

  const handleMenuClick = () => {
    if (open) {
      ref.current.style.transform = 'translateX(100%)';
      ref.current.style.transition = 'transform 0.5s ease';
    } else {
      ref.current.style.transform = 'translateX(0%)';
      ref.current.style.transition = 'transform 0.5s ease';
    }
    setOpen(!open);
  };

  return (
    <>
      <Header />
      <Provider store={store}>
        <Router>
          <header className="bg-main_color p-4">
            <div className="links container mx-auto flex justify-between items-center">
              <div>
                <b className="text-2xl font-bold text-title">dangila</b>
              </div>
              <nav>
                <ul className="flex space-x-9">
                  <li><Link to="/" className="text-1xl font-semibold text-black link p-1">Page</Link></li>
                  <li><Link to="/products" className="text-1xl font-semibold text-black link p-1">Benefit</Link></li>
                  <li><Link to="/why" className="text-1xl font-semibold text-black link p-1">Story</Link></li>
                  <li><Link to="/about" className="text-1xl font-semibold text-black link p-1">Manufacturing</Link></li>
                  <li><Link to="/customers" className="text-1xl font-semibold text-black link p-1">Packaging</Link></li>
                  <li><Link to="/slides" className="text-1xl font-semibold text-black link p-1">Team</Link></li>
                  <li><Link to="/cart" className="text-1xl font-semibold text-black link p-1">Cart</Link></li>
                  <li><Link to="/product" className="text-1xl font-semibold text-black link p-1">ProductItems</Link></li>
                </ul>
              </nav>
              <div className="icons flex space-x-9">
                <div className='flex flex-col text-center'>
                  {userInfo ? (
                    <>
                      <button onClick={logout} className='for' name='btn'>
                      <FontAwesomeIcon icon={faRightToBracket} className='text-black_color text-xl' style={{ transform: 'rotate(180deg)' }} />
                      </button>
                      <h5 className='text-brown_color font-bold pl-2'>Welcome {userInfo.name}</h5>
                    </>
                  ) : (
                    <button onClick={() => login()} className='for' name='btn'>
                      <FontAwesomeIcon icon={faSignOutAlt} className='text-black_color pl-3 text-xl' />

                    </button>
                  )}
                </div>
              </div>
            </div>

            <div className="link2 container mx-auto justify-between items-center">
              <div>
                <b className="text-2xl font-bold text-title">dangila</b>
              </div>
              <div className='bar'>
                <FontAwesomeIcon icon={faBars} onClick={handleMenuClick} />
              </div>
              <div className="last" ref={ref} onClick={handleMenuClick}>
                <div className="exit text-left text-xl text-amber-950">
                  <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="icons space-x-8">
                  <div className='flex flex-col text-center'>
                    {userInfo ? (
                      <>
                        <button onClick={logout} className='for' name='btn'>
                        <FontAwesomeIcon icon={faRightToBracket} className='text-black_color text-xl' style={{ transform: 'rotate(180deg)' }} />
                        </button>
                        <h5 className='text-gray-700 font-bold pl-2'>Welcome  {userInfo.name}</h5>
                      </>
                    ) : (
                      <button onClick={() => login()} className='for' name='btn'>
                        <FontAwesomeIcon icon={faSignOutAlt} className='text-black_color text-xl' />
                      </button>
                    )}
                  </div>
                </div>
                <nav>
                  <ul className="space-x-4">
                    <li><Link to="/" className="text-1xl font-semibold text-black link p-1">Page</Link></li>
                    <li><Link to="/products" className="text-1xl font-semibold text-black link p-1">Benefit</Link></li>
                    <li><Link to="/why" className="text-1xl font-semibold text-black link p-1">Story</Link></li>
                    <li><Link to="/about" className="text-1xl font-semibold text-black link p-1">Manufacturing</Link></li>
                    <li><Link to="/customers" className="text-1xl font-semibold text-black link p-1">Packaging</Link></li>
                    <li><Link to="/slides" className="text-1xl font-semibold text-black link p-1">Team</Link></li>
                    <li><Link to="/cart" className="text-1xl font-semibold text-black link p-1">Cart</Link></li>
                    <li><Link to="/product" className="text-1xl font-semibold text-black link p-1">ProductItems</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
          </header>

          <Switch>
            <Route exact path="/" component={Apper} />
            <Route path="/main" component={Main} />
            <Route path="/customers" component={Customers} />
            <Route path="/why" component={Why} />
            <Route path="/about" component={About} />
            <Route path="/products" component={Products} />
            <Route path="/slides" component={Slides} />
            <Route path="/footer" component={Footer} />
            <Route path="/cart" component={CartPage} />
            <Route path="/product" component={ProductListPage} />
            <Route path="*" component={Not} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
