import React from 'react';
import './App.css';
import Flipkart from './Flipkart/Flipkart.js';
import FlipkartMain from './Flipkart/FlipkartMain'
import Promotions from './promotions/Promotions'

import Home from './Home'
import Navbar from './MyShow/Navbar'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Media from './project/Media'
import Loginform from './project/Loginform'
import Slide from './Flipkart/Slide'
import NavbarSection from './Flipkart/NavbarSection';
import FilterItems from './Flipkart/FilterItems';
import LoginPage from './Flipkart/LoginPage';
import PlaceOrder from './Flipkart/PlaceOrder'
import Footer from './Flipkart/Footer';
import Frontliners from './Frontliners';

function App() {
  return (
    <div className="mt-2">
      {/* <Router>
        <NavbarSection></NavbarSection>
        <Route path="/" exact component={Home} />
        <Route path="/flipkart" component={Flipkart} />
        <Route path="/flipkartmain" component={FlipkartMain} />
        <Route path="/filteritems" component={FilterItems} />
        <Route path="/placeorder" component={PlaceOrder} />
        <Footer></Footer>
      </Router>  */}
      <Frontliners></Frontliners>
       
       
     




    </div>
  );
}


export default App;
