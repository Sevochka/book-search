import React from 'react';
import { render, screen } from '@testing-library/react';
import { BookCard } from './BookCard';
import userEvent from '@testing-library/user-event';

describe('BookCard', () => {
  const cardProps = {
    title: 'Test title',
    category: 'Test Category 1',
    smallThumbnail:
      'https://lh3.googleusercontent.com/proxy/j_oLNbWNSteTBOCPlt3YSoeZxvZa5TjplFDB7rEWU3nUu0aS9VbY6wKZFQg-f822N70mh_u_mg',
    authors: ['Test Author 1', 'Test Author 2'],
    id: 'test id',
  };
  let executorSpy: jest.Mock;

  beforeEach(() => {
    executorSpy = jest.fn((id: string) => id);
    const { title, authors, id, category, smallThumbnail } = cardProps;
    render(
      <BookCard
        id={id}
        title={title}
        category={category}
        smallThumbnail={smallThumbnail}
        authors={authors}
        onCardClick={executorSpy}
      />
    );
  });

  test('expect given data to be in the document', () => {
    const { title, authors, category } = cardProps;
    const titleElement = screen.getByText(title);
    const joinAuthors = authors ? authors.join(', ') : '';
    const authorElement = screen.getByText(joinAuthors);
    const categoryElement = screen.getByText(category);
    expect(titleElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();
    expect(categoryElement).toBeInTheDocument();
  });

  test('displays right image', () => {
    const { smallThumbnail } = cardProps;
    const displayedImage = document.querySelector('img') as HTMLImageElement;
    console.log(displayedImage.src);
    expect(displayedImage.src).toContain(smallThumbnail);
  });

  test('should call executor function with id on card click', () => {
    const card = document.querySelector('.book-card') as HTMLDivElement;
    userEvent.click(card);
    expect(executorSpy).toBeCalledWith(cardProps.id);
  });
});
