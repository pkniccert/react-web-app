import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './assets/css/index.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Messages from './components/Messages';
import Alert from './components/Alert';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={<Messages messages={"Welcome to "} name={"Pavan"} />} />
        <Route path="/message" component={<Alert color={"danger"} message={"Pavan Kumar"} />} />
      </Routes>
    </Router>
  );
}


export default App;
