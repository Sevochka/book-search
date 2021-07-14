import axios, { AxiosResponse } from 'axios';
import { BooksData } from 'types';

axios.defaults.baseURL = `https://www.googleapis.com/books/v1/volumes`;

const loadBooksData = async (q: string) => {
  const response: AxiosResponse<BooksData> = await axios.get('', {
    params: {
      q,
      key: 'AIzaSyAD4odPQAWao6Hmf4Kdq7cnSoAFN3YL4jE',
      maxResults: 30,
    },
  });
  return response.data;
};

export { loadBooksData };
