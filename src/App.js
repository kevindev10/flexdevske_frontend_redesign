import React, { useEffect } from 'react';
import './App.css';
import 'tachyons';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import OurWork from './components/OurWork/OurWork';
import Contact from  './components/Contact/Contact';
import ScrollToTop from './components/ScrollToTop';
import Blog from './components/Blog/Blog';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';


function App() {


  useEffect(() =>{
    ReactGA.initialize('UA-207738195-1');
    ReactGA.pageview(window.location.pathname + window.location.search);


  },[])

  return (
    <Router>
      <ScrollToTop/>
       <Navbar/>
          <Helmet>
              <meta charSet="utf-8" />



              <title>Flex DevsKe</title>
              
              <meta name="description" content="We are a professional web design company based in Nairobi, Kenya. We create websites uniquely crafted for your business that generate more leads, allowing you to sell your products online, and raise awareness of your brand. Our beautifully designed websites will help you stand out from the crowd and help to convert your visitors into customers." />
              
	          	<meta name="keywords" content="Web Designer Nairobi, Website Creators, Website Design, Web Design Company, Responsive Web Design, Website Design Services, Custom Website Design Services, Web Design Kenya, E-commerce Website Nairobi" />


          </Helmet>
      
          <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>

              <Route exact path='/our-work'>
                <OurWork/>
              </Route>

              <Route exact path='/contact'>
                <Contact/>
              </Route>
              <Route exact path='/blog'>
                <Blog/>
              </Route>

         </Switch>
    </Router>
    
   
  );
}

export default App;
