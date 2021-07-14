import { FC } from 'react';
import { BookCard } from 'components/BookCard/BookCard';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';
import './ContentPart.scss';

const ContentPart: FC = observer(() => {
  const { bookStore } = useStores();
  if (!bookStore.books) {
    return null;
  }
  const mapBooks = bookStore.books.map(({ volumeInfo }, i) => {
    const { authors, title, categories, imageLinks } = volumeInfo;
    const category = categories ? categories[0] : '';
    return (
      <BookCard
        key={i}
        authors={authors}
        title={title}
        category={category}
        smallThumbnail={imageLinks && imageLinks.smallThumbnail}
      />
    );
  });
  return <div className="content-part">{mapBooks}</div>;
});

export { ContentPart };
