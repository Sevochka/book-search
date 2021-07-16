import { BookStore } from './BookStore';
import { loadBooksData } from 'api/api';
import { BookItem } from 'types';

/*
 * Etag - integer code that identifies the type of stream in Google API.
 * It's different every time.
 * So in order to compare results we need to remove it.
 * */

const removeEtagFromBooks = (books: BookItem[]) => {
  return books.map((book) => {
    return removeEtag(book);
  });
};

const removeEtag = (book: BookItem) => {
  delete book.etag;
  return book;
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
  test('should set currentBook', async () => {
    const id = 'MqRXAwAAQBAJ';
    await store.setCurrentBook(id);

    expect(store.currentBook).not.toBeNull();
  });

  test('should clear currentBook', () => {
    const id = 'MqRXAwAAQBAJ';
    store.setCurrentBook(id);
    store.clearCurrentBook();

    expect(store.currentBook).toBeNull();
  });

  test('expect books from store to be equal to api req data', async () => {
    store.searchText = searchTestText;
    await store.setBooks();
    const booksData = await loadBooksData(
      searchTestText,
      store.currentSortByValue,
      store.startSearchIndex
    );

    expect(removeEtagFromBooks(store.books as BookItem[])).toEqual(
      removeEtagFromBooks(booksData.items)
    );
  });
});
