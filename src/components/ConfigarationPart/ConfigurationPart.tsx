import { SearchBar } from 'components/SearchBar/SearchBar';
import { FC } from 'react';
import { SelectMenu } from 'components/SelectMenu/SelectMenu';

type Props = {
  className: string;
};

const ConfigurationPart: FC<Props> = ({ className }) => {
  return (
    <section className={className}>
      <SearchBar
        handleStartSearch={(data) => {
          console.log(data);
        }}
        inputPlaceholder="Search for you favorite books"
      />
      <SelectMenu
        options={[
          {
            value: '1',
          },
          {
            value: '2',
            selected: true,
          },
          {
            value: '3',
          },
        ]}
        label="Select"
        onSelect={() => console.log}
        selectId="select1"
      />
    </section>
  );
};

export { ConfigurationPart };
