type BookItem = {
  buyLink: string;
  retailPrice: {
    amount: number;
    currencyCode: string;
  };
  volumeInfo: {
    title: string;
    categories?: string[];
    publisher?: string;
    publishedDate: string;
    authors: string[];
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

export type { BookItem, BooksData };