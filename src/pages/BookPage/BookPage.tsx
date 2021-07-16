import { FC } from 'react';
import { useParams } from 'react-router-dom';

const BookPage: FC = () => {
  const params = useParams();
  return <h5>{JSON.stringify(params)}</h5>;
};

export { BookPage };
