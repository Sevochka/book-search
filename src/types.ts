type BookItem = {
  buyLink: string;
  etag: string | undefined;
  retailPrice: {
    amount: number;
    currencyCode: string;
  };
  volumeInfo: {
    title: string;
    categories?: string[];
    publisher?: string;
    publishedDate: string;
    authors?: string[];
    description: string;
    infoLink: string;
    imageLinks?: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
};
type BooksData = {
  items: BookItem[];
  kind: string;
  totalItems: number;
};

type SelectOption = {
  value: string;
  label?: string;
  selected?: boolean;
};

type OrderBy = 'relevance' | 'newest';
type Category =
  | ''
  | 'art'
  | 'biography'
  | 'computers'
  | 'history'
  | 'medical'
  | 'poetry';

export type { BookItem, BooksData, SelectOption, OrderBy, Category };
