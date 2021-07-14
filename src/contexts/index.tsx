import React from 'react';
import { BookStore } from 'stores/BookStore';

export const storesContext = React.createContext({
  bookStore: new BookStore(),
});
