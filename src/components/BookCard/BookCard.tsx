import { FC, KeyboardEvent } from 'react';
import './BookCard.scss';
import { useHistory } from 'react-router';

type Props = {
  title: string;
  category?: string;
  smallThumbnail?: string;
  authors?: string[];
  id: string;
};

const BookCard: FC<Props> = ({
  smallThumbnail,
  title,
  authors,
  id,
  category,
}) => {
  const history = useHistory();
  const joinAuthors = authors ? authors.join(', ') : '';
  const handleCardClick = () => {
    history.push(`/book/${id}/`);
  };
  const handleCardKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleCardClick();
    }
  };
  return (
    <div
      className="card mb-3 justify-content-center book-card"
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex={0}
    >
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
