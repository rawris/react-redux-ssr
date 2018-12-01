import React from 'react';
import Loadable from 'react-loadable';
import App from './App';
import Home from './containers/home/home.container';
import NotFoundPage from './pages/NotFoundPage';
import { loadDataHome } from './containers/home/home.container';

export default [
  {
    ...App,
    routes: [
      {
        component: Home,
        path: '/',
        exact: true,
        loadData: loadDataHome
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
