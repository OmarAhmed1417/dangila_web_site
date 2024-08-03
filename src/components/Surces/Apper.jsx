import React from 'react';
import Header from '../header/Header';
import Main from '../mainsection/Main';
import Customers from '../Customers/Customer';
import Why from '../Why_dangila/Why';
import About from '../About_section/About';
import Slides from '../Slide/Slide';
import Footer from '../Footer/Footer';
import Proudcts from '../Prouducts/Prouducts';
const Apper = () => {
    return (  
        <>
        {/* <Header/> */}
        <Main/>
        <Customers/>
        <Why/>
        <About/>
        <Proudcts/>
        <Slides/>
        <Footer/>
        </>
    );
}
 
export default Apper;