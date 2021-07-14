import { ConfigurationPart } from 'components/ConfigarationPart/ConfigurationPart';
import { ContentPart } from 'components/ContentPart/ContentPart';
import './BooksPage.scss';

const BooksPage = () => {
  return (
    <article className="books">
      <ConfigurationPart className="books__configuration" />

      <section className="books__content">
        <ContentPart />
      </section>
    </article>
  );
};

export { BooksPage };
