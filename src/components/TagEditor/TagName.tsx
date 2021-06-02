import { FC } from 'react';
import './TagName.css';
import lockimg from './lock.png';
import unlockimg from './unlock.png';

type Tag = {
  name: string;
  lock: boolean;
};

type Props = {
  tag: Tag;
  own: boolean;
  onLockHandler: () => void;
  onUnlockHandler: () => void;
  onDeleteHandler: () => void;
};

const TagName: FC<Props> = ({
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
            onLockHandler();
          }}
        >
          <img src={unlockimg} alt="" />
        </button>
      )}
      {(own || !tag.lock) && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
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
