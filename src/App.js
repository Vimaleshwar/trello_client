import React from 'react';

import Chat from './components/Chat/Chat';
import Login from "./components/login/login"
import Menu from './components/menu/Menu'
import SignUp from './components/signup/SignUp'

import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/dashboard/:id" exact component={Menu}/>
      <Route path="/chat/:id/:chatroom" exact component={Chat} />
      <Route path="/signup" exact component={SignUp} />
    </Router>
  );
}

export default App;

