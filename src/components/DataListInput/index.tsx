import { FC } from 'react';
import './style.css';
import DataList from './DataList';

type Tag = {
  name: string;
  lock: boolean;
};

type Props = {
  listName: string;
  options: string[];
  placeHolder: string;
  addCurrentTag: (newTag: Tag) => void;
};

const DataListInput: FC<Props> = ({
  listName,
  options,
  placeHolder,
  addCurrentTag,
}: Props) => (
  <div className="DataListInput">
    <input
      list={listName}
      placeholder={placeHolder}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          addCurrentTag({ name: e.currentTarget.value, lock: false });
          e.currentTarget.value = '';
        }
      }}
    />
    <DataList dataListId={listName} options={options} />
  </div>
);

export default DataListInput;
