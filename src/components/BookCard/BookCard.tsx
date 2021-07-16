import { FC } from 'react';
import './BookCard.scss';

type Props = {
  title: string;
  category?: string;
  smallThumbnail?: string;
  authors?: string[];
};

const BookCard: FC<Props> = ({ smallThumbnail, title, authors, category }) => {
  const joinAuthors = authors ? authors.join(', ') : '';
  return (
    <div className="card mb-3 justify-content-center book-card">
      <div className="row g-0 align-items-center">
        <div className="col-md-4">
          {smallThumbnail && (
            <img
              src={smallThumbnail}
              className="img-fluid rounded-start w-100"
              alt={title}
            />
          )}
        </div>
        <div className="col-md-8 h-100">
          <div className="card-body h-100">
            <h5 className="card-title fs-6">{title}</h5>
            <p className="card-text">{joinAuthors}</p>
            <p className="card-text">
              <small className="text-muted">{category}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BookCard };
