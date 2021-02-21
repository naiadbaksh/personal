import React from 'react';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';



function App() {
  return (
    <>
    <Router>
    <Navbar/ >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/sign-up" exact component={SignUp} />
        </Switch>
    </Router>
    </>
  );
}

export default App;
