import React from 'react';
import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
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

function App() {
  return (
    <>
    <Header/>
<Router>

      <Switch>
        <Route exact path="/" component={Apper} /> {/* This route might not be needed if Apper is a layout */}
        <Route path="/main" component={Main} />
        <Route path="/customers" component={Customers} />
        <Route path="/why" component={Why} />
        <Route path="/about" component={About} />
        <Route path="/products" component={Products} />
        <Route path="/slides" component={Slides} />
        <Route path="/footer" component={Footer} />
        <Route path="*" component={Not} />
      </Switch>
       {/* Footer can be included here or as a layout component */}
    </Router>
  </>
  );
}

export default App;
