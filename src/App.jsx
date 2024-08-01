import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/header/Header';
import Main from './components/mainsection/Main';
import Customers from './components/Customers/Customer';
import Why from './components/Why_dangila/Why';
import About from './components/About_section/About';
import Products from './components/Prouducts/Prouducts';
import Slides from './components/Slide/Slide';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
     
      <Header />
      <Main />
      <Customers />
      <Why />
      <About />
      <Products />
      <Slides />
      <Footer />
    </>
  );
}

export default App;
