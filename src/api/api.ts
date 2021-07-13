import axios from 'axios';

axios.defaults.baseURL = `https://www.googleapis.com/books/v1/volumes`;

const loadBooksData = async (q: string) => {
  const response = await axios.get('', {
    params: { q, key: 'AIzaSyAD4odPQAWao6Hmf4Kdq7cnSoAFN3YL4jE' },
  });
  return response.data;
};

export { loadBooksData };
