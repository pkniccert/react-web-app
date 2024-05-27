import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './assets/css/index.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Messages from './components/Messages';
const App = () => {
  return (
    <Router>
      <Route path="/" exact component={<Messages messages={"Welcome to "} name={"Pavan"} />} />
      <Route path="/message" component={<Messages messages={"Welcome to "} name={"Pavan"} />} />
    </Router>
  );
}


export default App;
