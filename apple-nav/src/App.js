import React from 'react';
import './App.css';
import NavWrapper from "./NavComponents/NavWrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Route path = "/" component = {NavWrapper}/>
      </div>
    </Router>
  );
}

export default App;
