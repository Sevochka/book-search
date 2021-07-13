import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react';

type Props = {
  startSearch: (searchText: string) => void;
  inputPlaceholder: string;
};

const SearchBar: FC<Props> = ({ startSearch, inputPlaceholder }) => {
  const [searchText, setSearchText] = useState('');
  const clearSearchText = () => {
    setSearchText('');
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };
  const handleStartSearch = () => {
    startSearch(searchText);
    clearSearchText();
  };
  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleStartSearch();
    }
  };
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder={inputPlaceholder}
        aria-label={inputPlaceholder}
        value={searchText}
        onChange={handleInputChange}
        onKeyPress={handleEnterKeyDown}
      />
      <button
        className="btn btn-primary"
        type="button"
        onClick={handleStartSearch}
      >
        Search
      </button>
    </>
  );
};

export { SearchBar };
