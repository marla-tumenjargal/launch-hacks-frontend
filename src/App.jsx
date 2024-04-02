import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { TopBar } from './components';
import Pages from './components/Map-Utilities/map';

const exampleAnswers = ["None. They'll just beat the room for being black.", "about 25 I dont really know lel", "An infinite amount, they're all too short", "1 you stupid idiot"]
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Dashboard />
          </Route>
          <Route path="/resources" exact>
            <MCQuestion question="How many cops does it take to change a light bulb?" answer="None. They'll just beat the room for being black." answers={exampleAnswers}/>
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/maps" exact>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

App.js
