import './BooksPage.scss';

const BooksPage = () => {
  return (
    <article className="books">
      <section className="books__configuration">
        <div className="books__input-group input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for you favorite books"
            aria-label="Search for you favorite books"
          />
          <button className="btn btn-primary" type="button">
            Search
          </button>
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
