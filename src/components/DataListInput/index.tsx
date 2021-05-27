import { FC } from 'react';
import './style.css';
import DataList from './DataList';

type Props = {
  listName: string;
  options: string[];
  placeHolder: string;
};

const DataListInput: FC<Props> = ({
  listName,
  options,
  placeHolder,
}: Props) => (
  <div className="DataListInput">
    <input list={listName} placeholder={placeHolder} />
    <DataList dataListId={listName} options={options} />
  </div>
);

export default DataListInput;
