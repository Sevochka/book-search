import React from 'react';
import { BookStore } from 'stores/BookStore';

export const StoresContext = React.createContext({
  bookStore: new BookStore(),
});
