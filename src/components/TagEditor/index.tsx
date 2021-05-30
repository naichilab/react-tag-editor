import { FC, useState, SyntheticEvent } from 'react';
import './style.css';
import DataListInput from '../DataListInput';
import TagName from './TagName';

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

  const deleteTag = (tagName: string) => {
    setCurrentTags((tags) => tags.filter((x) => x.name !== tagName));
  };

  return (
    <div className="TagEditor">
      {currentTags.map((tag) => (
        <TagName
          tagName={tag.name}
          showLock={tag.lock}
          showUnlock={!tag.lock}
          showDelete
          onDeleteClick={(e: SyntheticEvent) => {
            e.preventDefault();
            deleteTag(tag.name);
          }}
          onLockClick={(e: SyntheticEvent) => {
            e.preventDefault();
            deleteTag(tag.name);
          }}
          onUnlockClick={(e: SyntheticEvent) => {
            e.preventDefault();
            deleteTag(tag.name);
          }}
        />
      ))}

      <DataListInput
        listName="tags"
        placeHolder="追加したいタグ名を入力"
        options={initialAllTags}
        addCurrentTag={addCurrentTag}
      />
    </div>
  );
};

export default TagEditor;
