import React from 'react';
import Movieslist from './Components/Movieslist';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Home from './Components/Home';
import Ticket from './Components/Ticket';


function App() {
  return (
      <Router>

    <div className="App">
    <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/booktickets">
              <Ticket/>
            </Route>
          </Switch>
    </div>
    </Router>
  );
}

export default App;
