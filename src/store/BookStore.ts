import { action, observable } from 'mobx';
import { loadBooksData } from 'api/api';
import { BooksData } from 'types';

class BookStore {
  @observable books: BooksData[] | null = null;

  @action setBooks = (): void => {
    loadBooksData('js').then((data) => {
      console.log(data);
    });
    // this.books = this.getCountryByCode(countryCode);
  };
}

export { BookStore };
