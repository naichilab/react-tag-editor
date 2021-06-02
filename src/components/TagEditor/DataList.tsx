import { FC } from 'react';
import DataListOption from './DataListOption';

type Props = {
  dataListId: string;
  options: string[];
};

const DataList: FC<Props> = ({ dataListId, options }: Props) => (
  <datalist id={dataListId} className="DataList">
    {options.map((option) => (
      <DataListOption key={option} option={option} />
    ))}
  </datalist>
);

export default DataList;
