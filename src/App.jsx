import React from 'react';
import Navbar from './components/navbar-components/Navbar';
import About from './components/navbar-components/About';
import Resources from './components/navbar-components/Resources';
import Contact from './components/navbar-components/TriviaPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './components/navbar-components/Dashboard';
import { TopBar } from './components';
import Pages from './components/Map-Utilities/map';
import MCQuestion from './components/question-types/MCQuestion';
import FRQuestion from './components/question-types/FRQuestion';
import Register from './components/Register';
import Login from './components/Login';

const exampleStuff = [
  { question: "why do i love cats?", answer: "purring", solved: false }, { question: "lololol", answer: "thats pretty funny", solved: false }
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
            <Resources />
          </Route>
          <Route path="/about" exact>
            <FRQuestion questions={exampleStuff} />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/maps" exact>
            <Pages />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;