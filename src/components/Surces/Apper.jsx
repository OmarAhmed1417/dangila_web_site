import React from 'react';
import Main from '../mainsection/Main';
import Customers from '../Customers/Customer';
import Why from '../Why_dangila/Why';
import About from '../About_section/About';
import Slides from '../Slide/Slide';
import Footer from '../Footer/Footer';
import Proudcts from '../Prouducts/Prouducts';
import ProductList from '../Rediux/Proudct/ProductList';
const Apper = () => {
    return (  
        <>
        <Main/>
        <Customers/>
        <Why/>
        <About/>
        <Proudcts/>
        <ProductList/>
        <Slides/>
        <Footer/>
        </>
    );
}

export default Apper;