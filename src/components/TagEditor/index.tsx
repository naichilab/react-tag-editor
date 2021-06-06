import { FC, useState, ChangeEventHandler } from 'react';
import './style.css';
import DataListInput from './DataListInput';
import TagName from './TagName';
import Modal from '../Modal';

type Tag = {
  name: string;
  lock: boolean;
};

type Props = {
  editable: boolean;
  initialCurrentTags: Tag[];
  allTagNames: string[];
  own: boolean;
};

const TagEditor: FC<Props> = ({
  editable,
  initialCurrentTags,
  allTagNames,
  own,
}: Props) => {
  const [currentTags, setCurrentTags] = useState<Tag[]>(initialCurrentTags);
  const [inputValue, setInputValue] = useState<string>('');

  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Tag>({
    name: '',
    lock: false,
  });

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

  const deleteTagConfirm = (tag: Tag) => {
    setDeleteTarget(tag);
    setShowDeleteConfirmModal(true);
  };

  const deleteTag = () => {
    setCurrentTags((tags) => tags.filter((x) => x.name !== deleteTarget.name));
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

  const closeModal = () => {
    setShowDeleteConfirmModal(false);
  };

  return (
    <div className="TagEditor">
      {currentTags.map((tag) => (
        <TagName
          editable={editable}
          key={tag.name}
          tag={tag}
          own={own}
          onLockHandler={() => {
            lockTag(tag);
          }}
          onUnlockHandler={() => {
            unlockTag(tag);
          }}
          onDeleteHandler={() => {
            deleteTagConfirm(tag);
          }}
        />
      ))}

      {editable && (
        <DataListInput
          listName="tags"
          placeHolder="追加したいタグ名を入力"
          options={allTagNames}
          inputValue={inputValue}
          onChangeHandle={onInputValueChangedHandler}
          onSubmitHandle={onInputValueSubmitHandler}
        />
      )}

      <Modal
        show={showDeleteConfirmModal}
        text={`"タグ「${deleteTarget.name}」を削除しますか？`}
        onOverlayClick={() => closeModal()}
        buttons={[
          {
            label: '削除',
            className: 'danger',
            onClick: () => {
              deleteTag();
              closeModal();
            },
          },
          {
            label: 'キャンセル',
            className: 'cancel',
            onClick: () => {
              closeModal();
            },
          },
        ]}
      />
    </div>
  );
};

export default TagEditor;
