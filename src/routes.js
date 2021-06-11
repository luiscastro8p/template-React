import React from "react";
const example = React.lazy(() => import("./views/example/list"));

const routes = [
  { path: '/', exact: true, name: 'login' },
  { path: '/admin/home', exact: true, name: 'Users', component: example },
  { path: '/admin/home2', exact: true, name: 'Users', component: example },
];
export default routes;
