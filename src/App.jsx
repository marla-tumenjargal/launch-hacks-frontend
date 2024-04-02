import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { TopBar } from './components';

function App() {
  return (
    <>
    <Router>
        <TopBar />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/resources" exact>
            <Resources />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
