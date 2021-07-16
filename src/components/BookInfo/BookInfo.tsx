import { FC } from 'react';
import './BookInfo.scss';

type Props = {
  thumbnail?: string;
  categories?: string[];
  authors?: string[];
  title?: string;
  description?: string;
  buyLink?: string;
};

const BookInfo: FC<Props> = ({
  thumbnail,
  categories,
  authors,
  description,
  title,
  buyLink,
}) => {
  const joinCategories = categories?.join(' / ');
  const joinAuthors = authors?.join(', ');
  return (
    <article className="book container-sm">
      <img className="book__thumbnail" src={thumbnail} alt="" />

      <div className="book__info">
        <p className="book__categories fst-italic mb-0">{joinCategories}</p>
        <h2 className="book__title">{title}</h2>
        <p className="book__authors text-decoration-underline">{joinAuthors}</p>
        {description && (
          <div
            className="book__description alert"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        )}
        {buyLink && (
          <div className="book__links">
            <a
              href={buyLink}
              className="link-primary"
              target="_blank"
              rel="noreferrer"
            >
              Buy [Google Books]
            </a>
          </div>
        )}
      </div>
    </article>
  );
};

export { BookInfo };
