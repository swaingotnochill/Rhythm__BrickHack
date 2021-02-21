import React from "react";
import './App.css';
import Header from "./Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import RhythmCards from "./Components/RhythmCards";
import Player from "./Components/Player";
import SwipeButtons from "./Components/SwipeButtons";

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Switch>
            <Route path="/chat">
              <h1>Chat Page</h1>
            </Route>
            <Route path="/">
            <RhythmCards />
            <SwipeButtons />
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
