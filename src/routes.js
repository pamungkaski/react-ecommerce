import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App/index';
import Main from './components/Main/index';
import Profile from './components/Profile/index';
import Login from './components/Login/index';
import Register from './components/Register/index';
import Voucher from './components/Voucher/index';
import Trades from './components/Trades/index';
import ItemPage from './components/ItemPage/index';
import MyItems from './components/MyItems/index';
import ErrorPage from './components/ErrorPage/index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="item/:id" component={ItemPage} />
    <Route path="profile" component={Profile} />
    <Route path="login" component={Login} />
    <Route path="register" component={Register} />
    <Route path="voucher" component={Voucher} />
    <Route path="trades" component={Trades} />
    <Route path="myItems" component={MyItems} />
    <Route path="*" component={ErrorPage} />
  </Route>
);
