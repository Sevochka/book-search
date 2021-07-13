import ReactDom from 'react-dom';
import { App } from 'App';
import { BookStore } from 'store/BookStore';

const bookStore = new BookStore();
bookStore.setBooks();

ReactDom.render(<App />, document.getElementById('root'));
