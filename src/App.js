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
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
function App() {
  return (
    <div className="App">
      
        <Router>
          <Switch>
          <Route path="/chat/:person">
              <Header backButton="/chat" />
             <ChatScreen />
            </Route>
            
            <Route path="/chat">
              <Header backButton="/" />
             <Chats />
            </Route>
            <Route path="/">
            <Header /> 
            <RhythmCards />
            <SwipeButtons />
            </Route>
          </Switch>
        </Router>
      
    </div>
  );
}

export default App;
