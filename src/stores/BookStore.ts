import { action, makeAutoObservable, observable } from 'mobx';
import { loadBooksData } from 'api/api';
import { BookItem } from 'types';

class BookStore {
  @observable books: BookItem[] | null = null;
  @observable totalItems: number | null = null;
  @observable searchText = 'js';
  constructor() {
    makeAutoObservable(this);
  }

  @action setBooks = (): void => {
    loadBooksData(this.searchText).then((data) => {
      this.books = data.items;
      this.totalItems = data.totalItems;
    });
  };
}

export { BookStore };
