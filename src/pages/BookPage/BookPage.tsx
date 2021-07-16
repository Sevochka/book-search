import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';
import withLoading from 'hocs/withLoading';
import './BookPage.scss';
import { useHistory } from 'react-router';
import { BookInfo } from 'components/BookInfo/BookInfo';

const WithLoadingBookInfo = withLoading(BookInfo);

const BookPage: FC = observer(() => {
  const { bookStore } = useStores();
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  useEffect(() => {
    bookStore.setCurrentBook(id);
  }, [bookStore, id]);
  const handleGoBack = () => {
    bookStore.clearCurrentBook();
    history.push('/');
  };

  const { currentBook } = bookStore;

  return (
    <>
      <button
        className="btn btn-outline-primary position-absolute m-1"
        onClick={handleGoBack}
      >
        Return
      </button>

      <WithLoadingBookInfo
        isLoading={!currentBook}
        title={currentBook?.volumeInfo.title}
        description={currentBook?.volumeInfo.description}
        buyLink={currentBook?.saleInfo.buyLink}
        thumbnail={currentBook?.volumeInfo.imageLinks?.thumbnail}
        authors={currentBook?.volumeInfo.authors}
        categories={currentBook?.volumeInfo.categories}
      />
    </>
  );
});

export { BookPage };
