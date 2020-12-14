import React, { FunctionComponent, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Service from './pages/Service/Service';
function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/service" component={Service} />
        </Switch>
    </Router>
  );
}

export default App;
