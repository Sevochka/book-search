import { action, makeAutoObservable, observable } from 'mobx';
import { loadBooksData, loadCurrentBookData } from 'api/api';
import { BookItem } from 'types';
import { categoriesOptions, paginationStep, sortOptions } from 'data';

class BookStore {
  @observable books: BookItem[] = [];
  @observable currentBook: BookItem | null = null;
  @observable totalItems: number | null = null;
  @observable searchText = '';
  @observable currentCategoryValue: string;
  @observable currentSortByValue: string;

  @observable startSearchIndex = 0;

  @observable isLoading = false;

  constructor() {
    makeAutoObservable(this);

    const currentCategory = categoriesOptions.reverse().find((c) => c.selected);
    const currentSortOption = sortOptions.reverse().find((o) => o.selected);

    this.currentCategoryValue = currentCategory
      ? currentCategory.value
      : categoriesOptions[0].value;

    this.currentSortByValue = currentSortOption
      ? currentSortOption.value
      : sortOptions[0].value;
  }

  @action addPagination() {
    this.startSearchIndex += paginationStep;
  }
  @action clearPagination() {
    this.startSearchIndex = 0;
  }

  @action setCurrentBook = async (id: string): Promise<void> => {
    this.currentBook = await loadCurrentBookData(id);
  };

  @action clearCurrentBook = () => {
    this.currentBook = null;
  };

  @action setBooks = async (withLoading = true): Promise<void> => {
    const q =
      this.currentCategoryValue !== ''
        ? `${this.searchText}+subject:${this.currentCategoryValue}`
        : this.searchText;
    if (q.trim() === '') {
      this.books = [];
      return;
    }
    if (withLoading) {
      this.clearPagination();
      this.isLoading = true;
    }
    const data = await loadBooksData(
      q,
      this.currentSortByValue,
      this.startSearchIndex
    );
    if (withLoading) {
      this.books = data.items || [];
      this.totalItems = data.totalItems;
    } else {
      this.books = this.books?.concat(data.items);
      this.totalItems = data.totalItems;
    }

    if (withLoading) this.isLoading = false;
  };
}

export { BookStore };
