import React, { Fragment } from 'react';
import Layout from './components/Layout';
import Login from './components/LoginPage/Login';
import { Route, HashRouter,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <Fragment>
      <BrowserRouter basename={ process.env.PUBLIC_URL }>
        <Route path="/" exact component={Login} />
        <Route path="/Layout" exact component={Layout} />
      </BrowserRouter>
    </Fragment>

  );
}

export default App;
