import { FC } from 'react';
import './TagName.css';
import lockimg from './lock.png';
import unlockimg from './unlock.png';

type Props = {
  tagName: string;
  showLock: boolean;
  showUnlock: boolean;
  showDelete: boolean;
  onLockHandler: () => void;
  onUnlockHandler: () => void;
  onDeleteHandler: () => void;
};

const TagName: FC<Props> = ({
  tagName,
  showLock,
  showUnlock,
  showDelete,
  onLockHandler,
  onUnlockHandler,
  onDeleteHandler,
}: Props) => (
  <div className="TagName">
    <div className="TagName-Contents">
      <div className="TagName-Text">{tagName}</div>
      {showLock && (
        <button
          type="button"
          className="TagName-LockButton"
          onClick={(e) => {
            e.preventDefault();
            onUnlockHandler();
          }}
        >
          <img src={lockimg} alt="" />
        </button>
      )}
      {showUnlock && (
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
      {showDelete && (
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
