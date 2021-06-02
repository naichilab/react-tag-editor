import { FC, useState, ChangeEventHandler } from 'react';
import './style.css';
import DataListInput from './DataListInput';
import TagName from './TagName';

type Tag = {
  name: string;
  lock: boolean;
};

type Props = {
  initialCurrentTags: Tag[];
  allTagNames: string[];
};

const TagEditor: FC<Props> = ({ initialCurrentTags, allTagNames }: Props) => {
  const [currentTags, setCurrentTags] = useState<Tag[]>(initialCurrentTags);
  const [inputValue, setInputValue] = useState<string>('');

  const addTag = (newTag: Tag) => {
    setCurrentTags((current) => current.concat([newTag]));
  };

  const lockTag = (tag: Tag) => {
    setCurrentTags((current) =>
      current.map((t) => ({
        ...t,
        ...(t.name === tag.name ? { lock: true } : {}),
      })),
    );
  };

  const unlockTag = (tag: Tag) => {
    setCurrentTags((current) =>
      current.map((t) => ({
        ...t,
        ...(t.name === tag.name ? { lock: false } : {}),
      })),
    );
  };

  const deleteTag = (tag: Tag) => {
    setCurrentTags((tags) => tags.filter((x) => x.name !== tag.name));
  };

  const onInputValueChangedHandler: ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const onInputValueSubmitHandler = () => {
    if (inputValue === '') return;
    if (currentTags.some((t) => t.name === inputValue)) return;
    addTag({ name: inputValue, lock: false });
    setInputValue('');
  };

  return (
    <div className="TagEditor">
      {currentTags.map((tag) => (
        <TagName
          key={tag.name}
          tagName={tag.name}
          showLock={tag.lock}
          showUnlock={!tag.lock}
          showDelete
          onLockHandler={() => {
            lockTag(tag);
          }}
          onUnlockHandler={() => {
            unlockTag(tag);
          }}
          onDeleteHandler={() => {
            deleteTag(tag);
          }}
        />
      ))}

      <DataListInput
        listName="tags"
        placeHolder="追加したいタグ名を入力"
        options={allTagNames}
        inputValue={inputValue}
        onChangeHandle={onInputValueChangedHandler}
        onSubmitHandle={onInputValueSubmitHandler}
      />
    </div>
  );
};

export default TagEditor;
