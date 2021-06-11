import React from "react";
const Example = React.lazy(() => import("./views/example/list"));
const Example2 = React.lazy(() => import('./views/example2/list'));


const routes = [
  { path: '/', exact: true, name: 'login' },
  { path: '/admin/home', exact: true, name: 'Users', component: Example },
  { path: '/admin/home2', exact: true, name: 'Users', component: Example2 },
];
export default routes;
