// Static data for layouts

import { SelectOption } from 'types';

const categoriesOptions: SelectOption[] = [
  {
    value: '',
    selected: true,
    label: 'all',
  },
  {
    value: 'biography',
  },
  {
    value: 'computers',
  },
  {
    value: 'history',
  },
  {
    value: 'medical',
  },
  {
    value: 'poetry',
  },
];

const sortOptions: SelectOption[] = [
  {
    value: 'relevance',
    selected: true,
  },
  {
    value: 'newest',
  },
];

export { categoriesOptions, sortOptions };
