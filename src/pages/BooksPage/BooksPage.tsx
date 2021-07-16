import { ContentPart } from 'components/ContentPart/ContentPart';
import './BooksPage.scss';
import WithLoading from '../../hocs/withLoading';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';

const WithLoadingCardMainStat = WithLoading(ContentPart);

const BooksPage = observer(() => {
  const { bookStore } = useStores();
  console.log(bookStore.books);
  const isBooksEmpty = bookStore.books.length === 0;
  return (
    <article className="books">
      <section className="books__content">
        {isBooksEmpty ? (
          <h1>NOTHING</h1>
        ) : (
          <WithLoadingCardMainStat isLoading={bookStore.isLoading} />
        )}
      </section>
    </article>
  );
});

export { BooksPage };
