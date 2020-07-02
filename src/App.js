import React, { Fragment } from 'react';
import Layout from './components/Layout';
import Login from './components/LoginPage/Login';
import { Route, HashRouter, Link } from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <HashRouter>
        {/* <Route path="/" exact component={Login} /> */}
        <Route path="/" exact component={Layout} />
      </HashRouter>
    </Fragment>

  );
}

export default App;
