import { ConfigurationPart } from 'components/ConfigarationPart/ConfigurationPart';
import { ContentPart } from 'components/ContentPart/ContentPart';
import './BooksPage.scss';
import WithLoading from '../../hocs/withLoading';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';

const WithLoadingCardMainStat = WithLoading(ContentPart);

const BooksPage = observer(() => {
  const { bookStore } = useStores();
  return (
    <article className="books">
      <ConfigurationPart className="books__configuration" />
      <section className="books__content">
        <WithLoadingCardMainStat isLoading={bookStore.isLoading} />
      </section>
    </article>
  );
});

export { BooksPage };
