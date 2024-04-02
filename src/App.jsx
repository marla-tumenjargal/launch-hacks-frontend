import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resources from './components/Resources';
import Contact from './components/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import { TopBar } from './components';
import Pages from './components/Map-Utilities/map';
import MCQuestion from './components/question-types/MCQuestion';
import FRQuestion from './components/question-types/FRQuestion';

const exampleStuff = [
  {question: "why do i love cats?", answer: "purring", solved: false}, {question: "lololol", answer: "thats pretty funny", solved: false}
]
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
            <FRQuestion questions={exampleStuff}></FRQuestion>
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
