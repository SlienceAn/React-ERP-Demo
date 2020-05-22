import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch } from 'react-router-dom';
import Layout from './components/Layout'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import withOpen from './HOC/withOpen';
const LayoutWithOpen = withOpen(Layout);
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Layout/>
    </Switch>
  </BrowserRouter>

  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
