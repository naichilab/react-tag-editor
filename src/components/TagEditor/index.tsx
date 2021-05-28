import { FC, useState } from 'react';
import TagNameCollection from './TagNameCollection';
import './style.css';
import DataListInput from '../DataListInput';

type Tag = {
  name: string;
  lock: boolean;
};

type Props = {
  initialCurrentTags: Tag[];
  initialAllTags: string[];
};

const TagEditor: FC<Props> = ({
  initialCurrentTags,
  initialAllTags,
}: Props) => {
  const [currentTags, setCurrentTags] = useState<Tag[]>(initialCurrentTags);

  const addCurrentTag = (newTag: Tag) => {
    if (newTag.name === '') return;
    setCurrentTags((c) => {
      const copy = c.slice();
      copy.push(newTag);
      const copy2 = Array.from(new Set(copy));

      return copy2;
    });
  };

  return (
    <div className="TagEditor">
      <TagNameCollection tags={currentTags} />
      <div className="TagEditor-DataListInput">
        <DataListInput
          listName="tags"
          placeHolder="追加したいタグ名を入力"
          options={initialAllTags}
          addCurrentTag={addCurrentTag}
        />
      </div>
    </div>
  );
};

export default TagEditor;
