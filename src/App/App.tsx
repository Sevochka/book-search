import 'App/styles.scss';
import { BooksPage } from 'pages/BooksPage/BooksPage';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';
import { useEffect } from 'react';

const App = observer(() => {
  const { bookStore } = useStores();
  useEffect(() => {
    bookStore.setBooks();
  }, [bookStore]);
  return <BooksPage />;
});

export { App };
