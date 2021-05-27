import { FC } from 'react';

type Props = {
  option: string;
};

const DataListOption: FC<Props> = ({ option }: Props) => (
  <option value={option}>{option}</option>
);

export default DataListOption;
