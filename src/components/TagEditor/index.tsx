import { FC } from 'react';
import TagNameCollection from './TagNameCollection';
import InputBox from '../InputBox';
import './style.css';

const tags = [
  { name: 'アクション', lock: true },
  { name: 'シューティング', lock: true },
  { name: 'オンライン', lock: true },
  { name: 'ほげほげ', lock: false },
  { name: 'XXXXXXXX', lock: false },
  { name: 'aiueo', lock: false },
];

const TagEditor: FC = () => (
  <div className="TagEditor">
    <TagNameCollection tags={tags} />
    <div className="TagEditor-InputBox">
      <InputBox text="hoge" />
    </div>
  </div>
);

export default TagEditor;
