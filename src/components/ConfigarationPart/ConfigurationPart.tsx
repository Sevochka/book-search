import { SearchBar } from 'components/SearchBar/SearchBar';
import { FC } from 'react';
import { SelectMenu } from 'components/SelectMenu/SelectMenu';
import './ConfigurationPart.scss';
import { observer } from 'mobx-react';
import { useStores } from 'hooks/useStores';

type Props = {
  className: string;
};

let ConfigurationPart: FC<Props> = ({ className }) => {
  const { bookStore } = useStores();
  return (
    <section className={className}>
      <SearchBar
        handleStartSearch={(data) => {
          bookStore.searchText = data;
          bookStore.setBooks();
        }}
        inputPlaceholder="Search for you favorite books"
      />
      <div className="options">
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
          selectId="select2"
        />
      </div>
    </section>
  );
};

ConfigurationPart = observer(ConfigurationPart);

export { ConfigurationPart };
