import React from 'react';
import { render, screen } from '@testing-library/react';
import { BookInfo } from './BookInfo';
/* eslint-disable  @typescript-eslint/no-explicit-any */
describe('BookCard', () => {
  const infoProps = {
    title: 'Test title',
    categories: ['Test Category 1', 'Test Category 2'],
    thumbnail:
      'https://lh3.googleusercontent.com/proxy/j_oLNbWNSteTBOCPlt3YSoeZxvZa5TjplFDB7rEWU3nUu0aS9VbY6wKZFQg-f822N70mh_u_mg',
    authors: ['Test Author 1', 'Test Author 2'],
    description: 'Test descriptions',
    buyLink: 'https://google.com/',
  };
  const emptyInfoProps = {
    title: undefined,
    categories: undefined,
    thumbnail: undefined,
    authors: undefined,
    description: undefined,
    buyLink: undefined,
  };
  let rerender: (
    ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  ) => void;

  beforeEach(() => {
    const { title, authors, description, categories, thumbnail, buyLink } =
      infoProps;
    rerender = render(
      <BookInfo
        title={title}
        categories={categories}
        thumbnail={thumbnail}
        authors={authors}
        description={description}
        buyLink={buyLink}
      />
    ).rerender;
  });

  test('expect given data to be in the document', () => {
    const { title, authors, categories, buyLink, description } = infoProps;
    const joinCategories = categories.join(' / ');
    const joinAuthors = authors?.join(', ');

    const titleElement = screen.getByText(title);
    const authorElement = screen.getByText(joinAuthors);
    const categoryElement = screen.getByText(joinCategories);
    const descriptionElement = screen.getByText(description);
    const buyLinkElement = screen.getByText(
      'Buy [Google Books]'
    ) as HTMLLinkElement;

    expect(buyLinkElement.href).toBe(buyLink);
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(categoryElement).toBeInTheDocument();
  });

  test('displays right image', () => {
    const { thumbnail } = infoProps;
    const displayedImage = document.querySelector('img') as HTMLImageElement;
    expect(displayedImage.src).toContain(thumbnail);
  });

  test('render without data', () => {
    const { title, authors, description, thumbnail, buyLink, categories } =
      emptyInfoProps;
    rerender(
      <BookInfo
        title={title}
        categories={categories}
        thumbnail={thumbnail}
        authors={authors}
        description={description}
        buyLink={buyLink}
      />
    );
    const book = document.querySelector('.book') as HTMLDivElement;
    expect(book).toBeInTheDocument();
  });
});
