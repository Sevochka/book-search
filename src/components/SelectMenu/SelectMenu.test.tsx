import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SelectMenu } from './SelectMenu';
import { SelectOption } from 'types';

describe('SearchBar', () => {
  const options: SelectOption[] = [
      { value: 'test1', label: 'Test 1' },
      { value: 'test2', label: 'Test 2', selected: true },
    ],
    label = 'Label',
    selectId = 'select1';

  let executorSpy: jest.Mock;

  beforeEach(() => {
    executorSpy = jest.fn((value: string) => value);
    render(
      <SelectMenu
        options={options}
        label={label}
        selectId={selectId}
        onSelect={executorSpy}
      />
    );
  });

  test('should render label', () => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  test('should select option with selected flag', () => {
    const selectedOption = options.find((o) => o.selected);
    if (selectedOption) {
      expect(
        (
          screen.getByText(
            selectedOption.label || selectedOption.value
          ) as HTMLOptionElement
        ).selected
      ).toBeTruthy();
    }
  });

  test('should call executor function on select change', () => {
    userEvent.selectOptions(screen.getByLabelText(label), options[0].value);
    expect(executorSpy).toBeCalledWith(options[0].value);
  });
});
