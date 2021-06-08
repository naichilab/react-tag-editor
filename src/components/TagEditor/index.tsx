import { FC, useState, ChangeEventHandler } from 'react';
import './style.css';
import DataListInput from './DataListInput';
import TagName from './TagName';
import Modal from '../Modal';
import Errors from './Errors';

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
  const [errors, setErrors] = useState<string[]>([]);
  const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<Tag>({
    name: '',
    lock: false,
  });

  const addTag = (newTag: Tag) => {
    setCurrentTags((current) => current.concat([newTag]));
  };

  const deleteTag = (tag: Tag) => {
    setCurrentTags((tags) => tags.filter((x) => x.name !== tag.name));
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

  const onModalOkHandler = () => {
    deleteTag(deleteTarget);
    setShowDeleteConfirmModal(false);
  };

  const onModalCancelHandler = () => {
    // set error
    setErrors((current) => current.concat(['new error']));
    setShowDeleteConfirmModal(false);
  };

  const onErrorClearHandler = () => {
    setErrors(() => []);
  };

  return (
    <>
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
      </div>
      <Errors errors={errors} clearHandler={onErrorClearHandler} />
      <Modal
        show={showDeleteConfirmModal}
        text={`タグ「${deleteTarget.name}」を削除しますか？`}
        onOverlayClick={onModalCancelHandler}
        buttons={[
          {
            label: '削除',
            className: 'danger',
            onClick: onModalOkHandler,
          },
          {
            label: 'キャンセル',
            className: 'cancel',
            onClick: onModalCancelHandler,
          },
        ]}
      />
    </>
  );
};

export default TagEditor;
