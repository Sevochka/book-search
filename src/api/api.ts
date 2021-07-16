import axios, { AxiosResponse } from 'axios';
import { BookItem, BooksData } from 'types';

axios.defaults.baseURL = `https://www.googleapis.com/books/v1/volumes`;
const key = 'AIzaSyAD4odPQAWao6Hmf4Kdq7cnSoAFN3YL4jE';

const loadBooksData = async (
  q: string,
  orderBy: string,
  startIndex: number
) => {
  const response: AxiosResponse<BooksData> = await axios.get('', {
    params: {
      q,
      key,
      maxResults: 30,
      orderBy,
      startIndex,
    },
  });
  return response.data;
};

const loadCurrentBookData = async (id: string) => {
  const response: AxiosResponse<BookItem> = await axios.get(id, {
    params: { key },
  });
  return response.data;
};

export { loadBooksData, loadCurrentBookData };
