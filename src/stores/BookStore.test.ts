import { BookStore } from './BookStore';
import { loadBooksData } from 'api/api';
import { BookItem } from 'types';

/*
 * Etag - integer code that identifies the type of stream in Google API.
 * It's different every time.
 * So in order to compare results we need to remove it.
 * */

const removeEtag = (books: BookItem[]) => {
  return books.map((book) => {
    delete book.etag;
    return book;
  });
};
describe('BookStore', () => {
  let store: BookStore;
  const searchTestText = 'Hello, World';
  beforeEach(() => {
    store = new BookStore();
  });
  test('should set searchText', () => {
    store.searchText = searchTestText;
    expect(store.searchText).toEqual(searchTestText);
  });
  test('expect books from store to be equal to api req data', async () => {
    store.searchText = searchTestText;
    await store.setBooks();
    const booksData = await loadBooksData(searchTestText);

    expect(removeEtag(store.books as BookItem[])).toEqual(
      removeEtag(booksData.items)
    );
  });
});
