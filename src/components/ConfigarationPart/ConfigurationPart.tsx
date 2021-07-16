import { SearchBar } from 'components/SearchBar/SearchBar';
import { FC } from 'react';
import { SelectMenu } from 'components/SelectMenu/SelectMenu';
import './ConfigurationPart.scss';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';
import { categoriesOptions, sortOptions } from 'data';

type Props = {
  className: string;
};

let ConfigurationPart: FC<Props> = ({ className }) => {
  const { bookStore } = useStores();
  const setBooksInStore = async () => {
    await bookStore.setBooks();
  };

  const handleStartSearch = (searchText: string) => {
    bookStore.searchText = searchText;
    setBooksInStore();
  };

  const handleSelectCategory = (value: string) => {
    bookStore.currentCategoryValue = value;
    setBooksInStore();
  };

  const handleSelectSortBy = (value: string) => {
    bookStore.currentSortByValue = value;
    setBooksInStore();
  };

  return (
    <section className={className}>
      <SearchBar
        handleStartSearch={handleStartSearch}
        inputPlaceholder="Search for you favorite books"
      />
      <div className="options">
        <SelectMenu
          options={categoriesOptions}
          label="Categories"
          onSelect={handleSelectCategory}
          selectId="select1"
        />
        <SelectMenu
          options={sortOptions}
          label="Sorting by"
          onSelect={handleSelectSortBy}
          selectId="select2"
        />
      </div>
    </section>
  );
};

ConfigurationPart = observer(ConfigurationPart);

export { ConfigurationPart };
