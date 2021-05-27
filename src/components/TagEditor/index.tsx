import { FC } from 'react';
import TagNameCollection from './TagNameCollection';
import InputBox from '../InputBox';
import './style.css';
import DataListInput from '../DataListInput';

const tags = [
  { name: 'アクション', lock: true },
  { name: 'シューティング', lock: true },
  { name: 'オンライン', lock: true },
  { name: 'ほげほげ', lock: false },
  { name: 'XXXXXXXX', lock: false },
  { name: 'aiueo', lock: false },
];

type Props = {
  allTags: string[];
};

const TagEditor: FC<Props> = ({ allTags }: Props) => (
  <div className="TagEditor">
    <TagNameCollection tags={tags} />
    <div className="TagEditor-InputBox">
      <InputBox text="hoge" />
    </div>

    <div className="TagEditor-DataListInput">
      <DataListInput
        listName="tags"
        placeHolder="追加したいタグ名を入力"
        options={allTags}
      />
    </div>
  </div>
);

export default TagEditor;
