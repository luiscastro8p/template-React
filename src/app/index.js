
import './app.css';
import React from "react";

import Login from '../containers/Login'
import {Provider} from 'react-redux'
import store from '../store'
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Layout from '../hocs/Layout';

import Signup from '../containers/Signup';
import Activate from '../containers/Activate';
import ResetPassword from '../containers/ResetPassword';
import ResetPasswordConfirm from '../containers/ResetPasswordConfirm';
 import PrivateRoute from "./PrivateRoute";

const DefaultLayout = React.lazy(() =>
  import("../containers/DefaultLayout/index")
);
const loading = () => (
  <div className='view'>
    <div className='preloader d-flex justify-content-center align-items-center'>
      <div className='text-center'>
        <p>
          doCapital <small>®</small>{' '}
        </p>
      </div>
    </div>
  </div>
);
const  App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Registrarse</Link>
          <Switch>
            <React.Suspense fallback={loading()}>
              <Route exact path='/login' component={Login}></Route>
              <Route exact path='/signup' component={Signup}></Route>
              <Route
                exact
                path='/reset-password'
                component={ResetPassword}
              ></Route>
              <Route
                exact
                path='/password/reset/confirm/:uid/:token'
                component={ResetPasswordConfirm}
              ></Route>
              <Route exact path='/activate/:uid/:token' component={Activate} />
              <PrivateRoute path='/admin' component={DefaultLayout} />
            </React.Suspense>
          </Switch>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
