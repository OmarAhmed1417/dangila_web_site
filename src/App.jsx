import React from 'react';
import Header from './components/header/Header';
import Main from './components/mainsection/Main';
import ReactDOM from 'react-dom';
import Customers from './components/Customers/Customer';
import Why from './components/Why_dangila/Why';

function App() {
  return (
    <>
        < Header />
        <Main/>
        <Customers/>
        <Why/>
    </>
  );
}

export default App;
