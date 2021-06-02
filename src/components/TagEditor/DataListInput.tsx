import { ChangeEventHandler, FC } from 'react';
import './DataListInput.css';
import DataList from './DataList';

type Props = {
  listName: string;
  options: string[];
  placeHolder: string;
  inputValue: string | undefined;
  onChangeHandle: ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmitHandle: () => void;
};

const DataListInput: FC<Props> = ({
  listName,
  options,
  placeHolder,
  inputValue,
  onChangeHandle,
  onSubmitHandle,
}: Props) => (
  <div className="DataListInput">
    <input
      list={listName}
      placeholder={placeHolder}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          onSubmitHandle();
        }
      }}
      value={inputValue}
      onChange={onChangeHandle}
    />
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onSubmitHandle();
      }}
    >
      登録
    </button>
    <DataList dataListId={listName} options={options} />
  </div>
);

export default DataListInput;
