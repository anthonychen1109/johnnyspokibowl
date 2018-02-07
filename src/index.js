import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './static/css/styles.css';

// Components
import App from './components/app';
import Menu from './components/menu';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/menu" component={Menu} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
