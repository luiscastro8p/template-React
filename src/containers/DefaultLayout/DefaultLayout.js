import React, { Component, Suspense, useEffect } from "react";
import * as router from "react-router-dom";
import Sidebar from "./sidebar";
import { admin } from "../../navigations/admin"
import routes from '../../routes';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';



const DefaultFooter = React.lazy(() => import("./DefaultFooter"));

const DefaultLayout = ({ history }) => {
  useEffect(() => {
    console.log("gola");
  },[])
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  return (
    <div>
      <div className='sidebar'>
        <Sidebar items={admin} />
      </div>
      <div>
        <main className='main'>
          <Container fluid>
            <Suspense fallback={() => loading()}>
              <Switch>
                {routes.map((route, idx) => {
                  return route.component ? (
                    <Route
                      key={idx}
                      path={route.path}
                      exact={route.exact}
                      name={route.name}
                      render={(props) => <route.component {...props} />}
                    />
                  ) : null;
                })}
                <Redirect from='/' to='/admin/home' />
              </Switch>
            </Suspense>
          </Container>
        </main>
      </div>
    </div>
  );
};

export default DefaultLayout;
