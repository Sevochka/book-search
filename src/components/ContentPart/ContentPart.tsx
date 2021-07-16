import { FC } from 'react';
import { BookCard } from 'components/BookCard/BookCard';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';
import './ContentPart.scss';

const ContentPart: FC = observer(() => {
  const { bookStore } = useStores();
  if (!bookStore.books.length) {
    return null;
  }
  const handleLoadMoreClick = () => {
    bookStore.addPagination();
    bookStore.setBooks(false);
  };
  const mapBooks = bookStore.books.map(({ volumeInfo, id }, i) => {
    const { authors, title, categories, imageLinks } = volumeInfo;
    const category = categories ? categories[0] : '';
    return (
      <BookCard
        key={i}
        authors={authors}
        title={title}
        category={category}
        id={id}
        smallThumbnail={imageLinks && imageLinks.smallThumbnail}
      />
    );
  });
  return (
    <div className="content-part">
      <div className="content-part__total-items">
        Found {bookStore.totalItems} results
      </div>
      <div className="content-part__books">{mapBooks}</div>
      <div className="content-part__load-more">
        <button className="btn btn-link" onClick={handleLoadMoreClick}>
          Load more
        </button>
      </div>
    </div>
  );
});

export { ContentPart };
