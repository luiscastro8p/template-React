import React, { Suspense, useEffect } from 'react';
import Sidebar from './sidebar';
import { admin } from '../../navigations/admin';
import routes from '../../routes';
import { Container } from 'reactstrap';
import { Redirect, Route, Switch } from 'react-router-dom';

const DefaultFooter = React.lazy(() => import('./DefaultFooter'));

const DefaultLayout = ({ history }) => {
  useEffect(() => {}, []);
  const Loading = () => {
    return <div className='animated fadeIn pt-1 text-center'>Loading...</div>;
  };
  return (
    <div>
      <div className='sidebar'>
        <Sidebar items={admin} history={history} />
      </div>

      <div className='content-container'>
        <Container fluid>
          <Suspense fallback={<Loading />}>
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
      </div>
    </div>
  );
};

export default DefaultLayout;
