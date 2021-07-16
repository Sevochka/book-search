import { ContentPart } from 'components/ContentPart/ContentPart';
import './BooksPage.scss';
import WithLoading from '../../hocs/withLoading';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';

const WithLoadingCardMainStat = WithLoading(ContentPart);

const BooksPage = observer(() => {
  const { bookStore } = useStores();
  const isBooksEmpty = bookStore.books.length === 0;

  return (
    <article className="books">
      <section className="books__content">
        {isBooksEmpty && !bookStore.isLoading ? (
          <div className="alert text-center">
            <h3>
              {bookStore.searchText.trim() !== ''
                ? 'Looks like nothing has been found. Try to change your search text.'
                : 'Start searching by typing books title in the field.'}
            </h3>
          </div>
        ) : (
          <WithLoadingCardMainStat isLoading={bookStore.isLoading} />
        )}
      </section>
    </article>
  );
});

export { BooksPage };
