import React from 'react';
import Header from './components/header/Header';
import Main from './components/mainsection/Main';
import ReactDOM from 'react-dom';
import Customers from './components/Customers/Customer';
import Why from './components/Why_dangila/Why';
import About from './components/About_section/About';
import Proudcts from './components/Prouducts/Prouducts';
import Slides from './components/Slide/Slide';

function App() {
  return (
    <>
        < Header />
        <Main/>
        <Customers/>
        <Why/>
        <About/>
        <Proudcts/>
        <Slides/>
    </>
  );
}

export default App;
