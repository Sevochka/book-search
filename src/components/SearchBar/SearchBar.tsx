import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react';

type Props = {
  handleStartSearch: (searchText: string) => void;
  inputPlaceholder: string;
};

const SearchBar: FC<Props> = ({ handleStartSearch, inputPlaceholder }) => {
  const [searchText, setSearchText] = useState('');
  const handleClearSearchText = () => {
    setSearchText('');
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value);
  };
  const startSearch = () => {
    handleStartSearch(searchText);
  };
  const handleEnterKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      startSearch();
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
      <button className="btn btn-primary" type="button" onClick={startSearch}>
        Search
      </button>
      <button
        className="btn btn-danger"
        type="button"
        onClick={handleClearSearchText}
      >
        Cancel
      </button>
    </>
  );
};

export { SearchBar };
