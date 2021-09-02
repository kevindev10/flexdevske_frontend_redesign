import React from 'react';
import './App.css';
import 'tachyons';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import OurWork from './components/OurWork/OurWork';
import Contact from  './components/Contact/Contact';

function App() {
  return (
    <Router>
        <Navbar/>
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

         </Switch>
    </Router>
    
   
  );
}

export default App;
