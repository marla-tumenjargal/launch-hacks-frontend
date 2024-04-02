import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/TriviaPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { TopBar } from './components';
import Pages from './components/Map-Utilities/map';
import MCQuestion from './components/question-types/MCQuestion';

const exampleAnswers = ["None. They'll just beat the room for being black.", "about 25 I dont really know lel", "An infinite amount, they're all too short", "1 you stupid idiot"]
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
          <Route path="/maps" exact>
            <Pages />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
