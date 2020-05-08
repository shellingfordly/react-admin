import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './view/login/Login'
import Admin from './view/admin/Admin'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/admin' component={Admin}></Route>
        <Redirect to='/login' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
