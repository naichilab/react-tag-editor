import { FC } from 'react';
import TagName from './TagName';
import './TagEditor.css';

const TagEditor: FC = () => (
  <div className="TagEditor">
    <TagName name="aaa" lock />
    <TagName name="bbb" lock />
    <TagName name="ccc" lock />
    <TagName name="ddd" lock={false} />
    <TagName name="eee" lock={false} />
  </div>
);

export default TagEditor;
