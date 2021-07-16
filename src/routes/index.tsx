import React from 'react';

import { BooksPage } from 'pages/BooksPage/BooksPage';
import { Page404 } from 'pages/Page404/Page404';
import { BookPage } from 'pages/BookPage/BookPage';

type Route = {
  name: string;
  path: string;
  component: React.FC<unknown>;
  exact?: boolean;
};

const routes: Route[] = [
  {
    name: 'books',
    path: '/',
    component: BooksPage,
    exact: true,
  },
  {
    name: 'countryPage',
    path: '/book/:id',
    exact: true,
    component: BookPage,
  },
  {
    name: 'page404',
    path: '**',
    component: Page404,
  },
];

export default routes;
