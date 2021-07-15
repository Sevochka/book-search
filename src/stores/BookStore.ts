import { action, computed, makeAutoObservable, observable } from 'mobx';
import { loadBooksData } from 'api/api';
import { BookItem } from 'types';
import { categoriesOptions, sortOptions } from 'data';

class BookStore {
  @observable books: BookItem[] | null = null;
  @observable totalItems: number | null = null;
  @observable private _searchText = '';
  @observable private _currentCategoryValue: string;
  @observable private _currentSortByValue: string;

  constructor() {
    makeAutoObservable(this);

    const currentCategory = categoriesOptions.reverse().find((c) => c.selected);
    const currentSortOption = sortOptions.reverse().find((o) => o.selected);

    this._currentCategoryValue = currentCategory
      ? currentCategory.value
      : categoriesOptions[0].value;

    this._currentSortByValue = currentSortOption
      ? currentSortOption.value
      : sortOptions[0].value;
  }

  set searchText(text: string) {
    this._searchText = text;
  }
  @computed get searchText() {
    return this._searchText;
  }

  set currentCategoryValue(text: string) {
    this._currentCategoryValue = text;
  }
  @computed get currentCategoryValue() {
    return this._currentCategoryValue;
  }

  set currentSortByValue(text: string) {
    this._currentSortByValue = text;
  }
  @computed get currentSortByValue() {
    return this._currentSortByValue;
  }

  @action setBooks = async (): Promise<void> => {
    const q =
      this.currentCategoryValue !== ''
        ? `${this.searchText}+subject:${this.currentCategoryValue}`
        : this.searchText;
    const data = await loadBooksData(q, this.currentSortByValue);
    this.books = data.items;
    this.totalItems = data.totalItems;
  };
}

export { BookStore };
