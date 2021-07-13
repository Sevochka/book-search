import './BooksPage.scss';
import { SearchBar } from 'components/SearchBar/SearchBar';

const BooksPage = () => {
  return (
    <article className="books">
      <section className="books__configuration">
        <div className="books__input-group input-group">
          <SearchBar
            startSearch={(data) => {
              console.log(data);
            }}
            inputPlaceholder="Search for you favorite books"
          />
        </div>
        <div>
          <h2>123</h2>
        </div>
      </section>
      <section className="books__content">
        <h1>1</h1>
      </section>
    </article>
  );
};

export { BooksPage };
