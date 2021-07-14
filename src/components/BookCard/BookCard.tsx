import { FC } from 'react';
import './BookCard.scss';

const BookCard: FC = () => {
  return (
    <div className="card book-card">
      <img src="" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      </div>
    </div>
  );
};

export { BookCard };
