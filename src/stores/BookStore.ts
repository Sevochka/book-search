import { action, computed, makeAutoObservable, observable } from 'mobx';
import { loadBooksData } from 'api/api';
import { BookItem } from 'types';

class BookStore {
  @observable books: BookItem[] | null = null;
  @observable totalItems: number | null = null;
  @observable _searchText = 'js';
  constructor() {
    makeAutoObservable(this);
  }
  set searchText(text: string) {
    this._searchText = text;
  }
  @computed get searchText() {
    return this._searchText;
  }

  @action setBooks = (): Promise<void> => {
    return loadBooksData(this.searchText).then((data) => {
      this.books = data.items;
      this.totalItems = data.totalItems;
    });
  };
}

export { BookStore };
