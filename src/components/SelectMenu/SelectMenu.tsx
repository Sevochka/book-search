import React, { FC } from 'react';
import { SelectOption } from 'types';
import './SelectMenu.scss';

type Props = {
  options: SelectOption[];
  label: string;
  onSelect: (value: string) => void;
  selectId: string;
};

const SelectMenu: FC<Props> = ({ options, label, onSelect, selectId }) => {
  /*
   * if label is defined, use it for the label of option
   * else use value.
   */
  const mapOption = options.map(({ value, label }) => (
    <option key={value} value={value}>
      {label || value}
    </option>
  ));
  /* Determine selected value for select */
  const selectedOption = options.find(({ selected }) => selected);
  const selectedValue = selectedOption ? selectedOption.value : undefined;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <label className="input-group-text custom-label" htmlFor={selectId}>
          {label}
        </label>
      </div>
      <select
        className="form-control"
        id={selectId}
        onChange={handleChange}
        defaultValue={selectedValue}
      >
        {mapOption}
      </select>
    </div>
  );
};

export { SelectMenu };
