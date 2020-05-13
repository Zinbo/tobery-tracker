import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import Layout from './layout';
import AddVisit from './pages/addVisit';

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Router>
        <Switch>
          <Route path='/add-visit'>
            <AddVisit />
          </Route>
          <Route path='/'>
            <App />
          </Route>
        </Switch>
      </Router>
    </Layout>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
