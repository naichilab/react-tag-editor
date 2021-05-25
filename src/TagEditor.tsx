import { FC } from 'react';
import TagNameCollection from './TagNameCollection';
import './TagEditor.css';

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
  </div>
);

export default TagEditor;
