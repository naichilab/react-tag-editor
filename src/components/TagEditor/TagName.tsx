import { FC } from 'react';
import './TagName.css';
import lockimg from './lock.png';
import unlockimg from './unlock.png';

type Tag = {
  name: string;
  lock: boolean;
};

type Props = {
  editable: boolean;
  tag: Tag;
  own: boolean;
  onLockHandler: () => void;
  onUnlockHandler: () => void;
  onDeleteHandler: () => void;
};

const TagName: FC<Props> = ({
  editable,
  tag,
  own,
  onLockHandler,
  onUnlockHandler,
  onDeleteHandler,
}: Props) => (
  <div className="TagName">
    <div className="TagName-Contents">
      <div className="TagName-Text">{tag.name}</div>
      {tag.lock && (
        <button
          type="button"
          disabled={!own}
          className="TagName-LockButton"
          onClick={(e) => {
            e.preventDefault();
            if (!editable) return;
            if (!own) return;
            onUnlockHandler();
          }}
        >
          <img src={lockimg} alt="" />
        </button>
      )}
      {own && !tag.lock && (
        <button
          type="button"
          className="TagName-LockButton"
          onClick={(e) => {
            e.preventDefault();
            if (!editable) return;
            onLockHandler();
          }}
        >
          <img src={unlockimg} alt="" />
        </button>
      )}
      {editable && (own || !tag.lock) && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (!editable) return;
            onDeleteHandler();
          }}
          className="TagName-Delete clearText"
        >
          Delete
        </button>
      )}
    </div>
  </div>
);

export default TagName;
