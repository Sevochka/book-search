import './BooksPage.scss';
import { ConfigurationPart } from 'components/ConfigarationPart/ConfigurationPart';

const BooksPage = () => {
  return (
    <article className="books">
      <ConfigurationPart className="books__configuration" />

      <section className="books__content">
        <h1>1</h1>
      </section>
    </article>
  );
};

export { BooksPage };
